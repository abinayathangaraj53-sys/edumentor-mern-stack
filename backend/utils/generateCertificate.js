import PDFDocument from "pdfkit";

export const generateCertificatePDF = (res, certificate) => {
  const doc = new PDFDocument({ size: "A4" });

  res.setHeader("Content-Type", "application/pdf");
  res.setHeader(
    "Content-Disposition",
    `attachment; filename=${certificate.certificateId}.pdf`
  );

  doc.pipe(res);

  doc.fontSize(26).text("Certificate of Completion", { align: "center" });
  doc.moveDown(2);

  doc.fontSize(16).text(`This certifies that`, { align: "center" });
  doc.moveDown();

  doc.fontSize(22).text(certificate.name, { align: "center" });
  doc.moveDown();

  doc.fontSize(16).text(
    `has successfully completed the course`,
    { align: "center" }
  );
  doc.moveDown();

  doc.fontSize(18).text(certificate.courseTitle, { align: "center" });
  doc.moveDown(2);

  doc.fontSize(12).text(`Certificate ID: ${certificate.certificateId}`, {
    align: "center",
  });

  doc.text(`Issued on: ${new Date().toDateString()}`, {
    align: "center",
  });

  doc.end();
};
