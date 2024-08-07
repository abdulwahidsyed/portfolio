import styled from "styled-components";
import {
  StyledHeading,
  StyledHeadingMedium,
  StyledParagraph,
  StyledParagraphBold,
} from "../../components/UI/Styled";
import { useMemo } from "react";

export const SkillsGenerator = ({ data = [] }) => {
  const basicData = useMemo(() => {
    return { ...data[0] };
  }, [data]);

  const additionalSkills = useMemo(() => {
    if (data.length > 1) {
      const k = [...data];
      k.splice(0, 1);
      return k;
    } else return null;
  }, [data]);

  if (!data.length) return;
  return (
    <StyledCtn>
      <StyledHeadingMedium>Skills</StyledHeadingMedium>
      <StyledBox>
        <StyledParagraphBold>Frontend-End: </StyledParagraphBold>
        <StyledParagraph> {basicData.frontend}</StyledParagraph>
      </StyledBox>
      <StyledBox>
        <StyledParagraphBold>Back-End: </StyledParagraphBold>
        <StyledParagraph> {basicData.backend}</StyledParagraph>
      </StyledBox>
      <StyledBox>
        <StyledParagraphBold>Databases: </StyledParagraphBold>
        <StyledParagraph> {basicData.databases}</StyledParagraph>
      </StyledBox>
      {basicData.cloud ? (
        <StyledBox>
          <StyledParagraphBold>Cloud: </StyledParagraphBold>
          <StyledParagraph> {basicData.cloud}</StyledParagraph>
        </StyledBox>
      ) : null}
      {basicData.devOps ? (
        <StyledBox>
          <StyledParagraphBold>DevOps: </StyledParagraphBold>
          <StyledParagraph> {basicData.devOps}</StyledParagraph>
        </StyledBox>
      ) : null}

      <StyledBox>
        <StyledParagraphBold>Development Tools: </StyledParagraphBold>
        <StyledParagraph> {basicData.developmentTools}</StyledParagraph>
      </StyledBox>

      {additionalSkills &&
        additionalSkills.map((el) => (
          <StyledBox>
            <StyledParagraphBold>{el.skillHeading}: </StyledParagraphBold>
            <StyledParagraph>{el.skillDetails}</StyledParagraph>
          </StyledBox>
        ))}
      {/* <StyledHeadingMedium></StyledHeadingMedium> */}
    </StyledCtn>
  );
};

const StyledCtn = styled.div`
  padding: 30px 30px 0 30px;
  * {
    color: black;
  }
`;

const StyledBox = styled.div`
  display: flex;
  gap: 4px;
  & p {
    margin: 10px 0;
  }
`;
