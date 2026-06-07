import styled from "styled-components";
import { StyledFooter, StyledParagraph } from "../../components/UI/Styled";
import { mobile } from "../../components/UI/Styled/media-queries";
import ReactToPrint from "react-to-print";

import html2canvas from "html2canvas";
import jsPDF from "jspdf";

export const PreviewFooter = ({ printRef }) => {
  const handleDownloadPdf = async () => {
    const element = printRef.current;

    const canvas = await html2canvas(element, {
      scale: 2, // important for quality
      useCORS: true,
    });

    const imgData = canvas.toDataURL("image/png");

    const pdf = new jsPDF("p", "mm", "a4");

    const pageWidth = 210; // A4 width in mm
    const pageHeight = 297;

    const imgWidth = pageWidth;
    const imgHeight = (canvas.height * imgWidth) / canvas.width;

    let position = 0;

    // Handle multi-page resume
    if (imgHeight > pageHeight) {
      let heightLeft = imgHeight;

      pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
      heightLeft -= pageHeight;

      while (heightLeft > 0) {
        position = heightLeft - imgHeight;
        pdf.addPage();
        pdf.addImage(imgData, "PNG", 0, position, imgWidth, imgHeight);
        heightLeft -= pageHeight;
      }
    } else {
      pdf.addImage(imgData, "PNG", 0, 0, imgWidth, imgHeight);
    }

    pdf.save("resume.pdf");
  };

  return (
    <Ctn>
      <StyledFlexed>
        {/* <StyledParagraphLoc onClick={handleDownloadPdf}>
          Print
        </StyledParagraphLoc> */}
        <ReactToPrint
          bodyClass="print-agreement"
          content={() => printRef.current}
          trigger={() => <StyledParagraphLoc>Print</StyledParagraphLoc>}
        />
      </StyledFlexed>
    </Ctn>
  );
};

const Ctn = styled(StyledFooter)`
  overflow: auto;
  box-sizing: border-box;
`;

const StyledFlexed = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  box-sizing: border-box;
  margin: auto;
  gap: 20px;
`;

const StyledParagraphLoc = styled(StyledParagraph)`
  color: ${(props) => (props.selected ? "rgb(129 200 255);" : "white")};
  cursor: pointer;
  transition: transform 0.3s cubic-bezier(0.4, 0, 0.1, 1.1);
  white-space: nowrap;
  padding: 2px 20px;
  margin: 0;

  //   transform: ${(props) => (props.selected ? "scale(1.4)" : "unset")};

  ${mobile`
      font-size: 14px;
    `}

  &:hover {
    background: ${(props) =>
      props.selected ? "unset" : "rgb(225 225 225 / 19%)"};
  }
`;
