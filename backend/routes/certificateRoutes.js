import express from "express";
import Certificate from "../models/Certificate.js";
import puppeteer from "puppeteer";

const router = express.Router();

/* =====================================================
   1️⃣ FAKE PAYMENT → CREATE CERTIFICATE
===================================================== */
router.post("/pay", async (req, res) => {
  try {
    const { userId, studentName, courseCode, courseTitle } = req.body;

    if (!userId || !courseCode || !studentName) {
      return res.status(400).json({ message: "Missing data" });
    }

    const certificateId = "CERT-" + Date.now();

    await Certificate.create({
      userId,
      studentName,
      courseCode,
      courseTitle,
      certificateId,
      paid: true,
    });

    res.json({
      success: true,
      certificateId,
    });
  } catch (err) {
    console.error("Certificate creation error:", err);
    res.status(500).json({ message: "Certificate creation failed" });
  }
});

/* =====================================================
   2️⃣ HTML → PDF (FRONTEND UI → PDF)
   ⚠️ MUST COME BEFORE "/:certificateId"
===================================================== */
router.get("/pdf/:certificateId", async (req, res) => {
  let browser;

  try {
    const { certificateId } = req.params;

    // Frontend certificate page
    const certificateUrl = `http://localhost:5173/certificate/${certificateId}`;

    browser = await puppeteer.launch({
      headless: true,
      args: ["--no-sandbox", "--disable-setuid-sandbox"],
    });

    const page = await browser.newPage();

    // Match frontend layout
    await page.setViewport({ width: 1200, height: 900 });

    const response = await page.goto(certificateUrl, {
      waitUntil: "networkidle0",
      timeout: 0,
    });

    if (!response || !response.ok()) {
      throw new Error("Frontend page not reachable");
    }

    // Ensure UI is rendered
    await page.waitForSelector(".certificate-wrapper");

    // Generate PDF (exact UI)
    const pdfBuffer = await page.pdf({
      format: "A4",
      printBackground: true,
      preferCSSPageSize: true,
    });

    // Send raw PDF buffer (IMPORTANT)
    res.writeHead(200, {
      "Content-Type": "application/pdf",
      "Content-Disposition": `attachment; filename="${certificateId}.pdf"`,
      "Content-Length": pdfBuffer.length,
    });

    res.end(pdfBuffer);
  } catch (error) {
    console.error("❌ Puppeteer PDF error:", error);
    res.status(500).send("PDF generation failed");
  } finally {
    if (browser) await browser.close();
  }
});

/* =====================================================
   3️⃣ GET CERTIFICATE DATA (JSON)
===================================================== */
router.get("/:certificateId", async (req, res) => {
  try {
    const cert = await Certificate.findOne({
      certificateId: req.params.certificateId,
    });

    if (!cert) {
      return res.status(404).json({ message: "Certificate not found" });
    }

    res.json(cert);
  } catch (err) {
    console.error("Fetch certificate error:", err);
    res.status(500).json({ message: "Failed to fetch certificate" });
  }
});

export default router;
