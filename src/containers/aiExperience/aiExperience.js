import React from "react";
import styled from "@emotion/styled";
import { theme } from "styles/index";

const { colors, fonts } = theme;

const Section = styled.section`
  display: flex;
  position: relative;
  justify-content: center;
  flex-direction: column;
  padding: 0 5rem;
  margin-bottom: 7rem;

  @media screen and (max-width: 900px) {
    padding: 0 4rem;
  }

  @media screen and (max-width: 600px) {
    padding: 0 2.5rem;
  }

  @media screen and (max-width: 400px) {
    padding: 0 1rem;
  }
`;

const Header = styled.div`
  display: grid;
  grid-template-columns: 1fr 50%;
  margin-bottom: 3rem;

  @media screen and (max-width: 920px) {
    display: block;
  }
`;

const Title = styled.h3`
  font-family: ${fonts.primary};
  font-size: 5rem;
  font-weight: normal;
  letter-spacing: 0.8rem;
  margin-bottom: 1.5rem;
  justify-self: center;

  @media screen and (max-width: 920px) {
    margin-bottom: 2rem;
    font-size: 4rem;
  }

  @media screen and (max-width: 600px) {
    font-size: 3.5rem;
  }
`;

const Intro = styled.p`
  max-width: 82rem;
  margin: 0 auto 4rem;
  color: ${colors.greyBlue};
  font-family: ${fonts.secondary};
  font-size: 1.7rem;
  line-height: 1.8;
  text-align: center;
`;

const Cards = styled.div`
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 2.5rem;

  @media screen and (max-width: 1100px) {
    grid-template-columns: 1fr;
  }
`;

const StackWrapper = styled.div`
  margin-top: 4rem;
  display: flex;
  flex-flow: column nowrap;
  align-items: center;
`;

const StackTitle = styled.h4`
  margin: 0 0 1.5rem;
  color: ${colors.white};
  font-family: ${fonts.primary};
  font-size: 1.6rem;
  letter-spacing: 0.3rem;
  text-transform: uppercase;
`;

const StackList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem;
  max-width: 90rem;
`;

const StackTag = styled.li`
  padding: 0.6rem 1.4rem;
  border: 1px solid rgba(0, 246, 237, 0.4);
  border-radius: 3px;
  color: ${colors.greyBlue};
  font-family: ${fonts.primary};
  font-size: 1.3rem;
  letter-spacing: 0.15rem;
`;

const Card = styled.article`
  min-height: 100%;
  padding: 2.5rem;
  border: 1px solid rgba(0, 246, 237, 0.25);
  background: linear-gradient(
    180deg,
    rgba(17, 34, 64, 0.92) 0%,
    rgba(10, 25, 47, 0.98) 100%
  );
  box-shadow: 0 20px 45px rgba(2, 12, 27, 0.22);
`;

const CardTitle = styled.h4`
  margin: 0 0 1rem;
  color: ${colors.white};
  font-family: ${fonts.primary};
  font-size: 1.8rem;
  letter-spacing: 0.2rem;
  text-transform: uppercase;
`;

const CardSubtitle = styled.p`
  margin: 0 0 2rem;
  color: ${colors.brightYellow};
  font-family: ${fonts.secondary};
  font-size: 1.4rem;
  text-transform: uppercase;
  letter-spacing: 0.2rem;
`;

const List = styled.ul`
  margin: 0;
  padding-left: 1.8rem;
  color: ${colors.greyBlue};
`;

const ListItem = styled.li`
  margin-bottom: 1.4rem;
  font-family: ${fonts.secondary};
  font-size: 1.5rem;
  line-height: 1.8;

  &:last-of-type {
    margin-bottom: 0;
  }
`;

const Emphasis = styled.span`
  color: ${colors.white};
`;

const AI_STACK = [
  "LLM Application Development",
  "Prompt Engineering",
  "RAG",
  "MCP",
  "AI Agents",
  "LangGraph",
  "Claude",
  "Codex",
  "Vertex AI",
  "Gemini",
  "BigQuery",
  "FastAPI",
  "Python",
  "Pydantic",
  "Evals",
  "AI-assisted Code Review",
  "Developer Productivity Automation",
];

const AIExperience = () => {
  return (
    <Section id="ai-engineering">
      <Header>
        <Title
          data-aos="fade-down"
          data-aos-duration="350"
          data-aos-delay="500"
        >
          AI Engineering & Developer Productivity
        </Title>
      </Header>
      <Intro>
        I am expanding my frontend architecture background into AI Product and
        Platform Engineering, with hands-on work on LLM-powered systems around
        developer workflows, enterprise integrations, RAG, MCP, evals, and
        AI-assisted software delivery. My focus is not only using AI tools,
        but designing reliable workflows around them: connecting AI assistants
        with project context, documentation, code review processes,
        architecture rules, and internal systems.
      </Intro>
      <Cards>
        <Card>
          <CardTitle>Detractor Category Tagger</CardTitle>
          <CardSubtitle>
            Java, GCP, Vertex AI, BigQuery, Cloud Functions
          </CardSubtitle>
          <List>
            <ListItem>
              Built the <Emphasis>detractor-category-tagger</Emphasis> as a
              production Cloud Function that classifies NPS detractor feedback
              into defined operational categories.
            </ListItem>
            <ListItem>
              Designed the pipeline around <Emphasis>BigQuery input lookup</Emphasis>,{" "}
              <Emphasis>eligibility rules</Emphasis>, <Emphasis>Vertex AI</Emphasis>{" "}
              classification with <Emphasis>Gemini 2.5 Flash</Emphasis>, and{" "}
              <Emphasis>BigQuery output persistence</Emphasis> for downstream
              reporting and analysis.
            </ListItem>
            <ListItem>
              Added both <Emphasis>HTTP</Emphasis> and <Emphasis>Pub/Sub</Emphasis>{" "}
              entry points, plus persisted <Emphasis>confidence</Emphasis>,{" "}
              <Emphasis>reason</Emphasis>, <Emphasis>model name</Emphasis>, and{" "}
              <Emphasis>prompt version</Emphasis> so the system is traceable,
              testable, and useful beyond a one-off demo.
            </ListItem>
          </List>
        </Card>
        <Card>
          <CardTitle>MCP-Augmented Delivery</CardTitle>
          <CardSubtitle>Jira, GitHub, Figma, Architecture & DX</CardSubtitle>
          <List>
            <ListItem>
              Use <Emphasis>MCP integrations</Emphasis> to augment development
              workflows with live context from <Emphasis>Jira</Emphasis>,{" "}
              <Emphasis>GitHub</Emphasis>, <Emphasis>Figma</Emphasis>, and
              internal engineering tooling.
            </ListItem>
            <ListItem>
              Built and use MCP servers for <Emphasis>frontend architecture</Emphasis>,{" "}
              <Emphasis>git history</Emphasis>, <Emphasis>dependency
              health</Emphasis>, <Emphasis>code metrics</Emphasis>,{" "}
              <Emphasis>team standards</Emphasis>, and <Emphasis>onboarding</Emphasis>{" "}
              to speed up discovery, implementation, code review, and delivery.
            </ListItem>
            <ListItem>
              I also connect <Emphasis>Obsidian</Emphasis> for personal
              engineering reference and estimation workflows, plus{" "}
              <Emphasis>Confluence</Emphasis> and <Emphasis>SonarQube</Emphasis>{" "}
              for project context, documentation lookup, and code quality
              signals.
            </ListItem>
          </List>
        </Card>
        <Card>
          <CardTitle>Custom Agents & Skills</CardTitle>
          <CardSubtitle>HITL, evals, reusable standards</CardSubtitle>
          <List>
            <ListItem>
              Built a <Emphasis>CX diagnostic agent</Emphasis> on top of a
              reusable agent loop with tool calling, progressive autonomy, and
              human approval gates for action-oriented steps.
            </ListItem>
            <ListItem>
              Added <Emphasis>context compaction</Emphasis>,{" "}
              <Emphasis>multi-turn evals</Emphasis>, and <Emphasis>telemetry</Emphasis>{" "}
              to make agent behaviour observable and safer to evolve.
            </ListItem>
            <ListItem>
              Maintain custom Codex skills for <Emphasis>architecture
              validation</Emphasis>, <Emphasis>code review</Emphasis>,{" "}
              <Emphasis>security scanning</Emphasis>, <Emphasis>test
              generation</Emphasis>, <Emphasis>documentation</Emphasis>,{" "}
              <Emphasis>planning</Emphasis>, and <Emphasis>refactoring</Emphasis>,
              all aligned with a shared <Emphasis>reference architecture</Emphasis>{" "}
              and frontend standards.
            </ListItem>
          </List>
        </Card>
        <Card>
          <CardTitle>AI Code Review Agent</CardTitle>
          <CardSubtitle>
            Prototype · Python, FastAPI, RAG, React, TypeScript
          </CardSubtitle>
          <List>
            <ListItem>
              Developing an <Emphasis>AI-assisted code review workflow</Emphasis>{" "}
              for React and TypeScript projects that analyzes PR diffs and
              produces structured review feedback.
            </ListItem>
            <ListItem>
              Retrieves <Emphasis>frontend architecture rules</Emphasis> through
              RAG and checks <Emphasis>accessibility</Emphasis>,{" "}
              <Emphasis>testing</Emphasis>, and architectural concerns against
              the reference architecture.
            </ListItem>
            <ListItem>
              Outputs <Emphasis>confidence scoring</Emphasis> and routes
              ambiguous findings through a <Emphasis>human approval</Emphasis>{" "}
              gate so the reviewer stays in control of merges.
            </ListItem>
          </List>
        </Card>
        <Card>
          <CardTitle>MCP Jira Assistant</CardTitle>
          <CardSubtitle>
            Prototype · MCP, Claude, Jira, Tool Calling
          </CardSubtitle>
          <List>
            <ListItem>
              Building an <Emphasis>MCP-based assistant</Emphasis> that
              connects AI tools to live Jira project context through a
              standardized tool integration layer.
            </ListItem>
            <ListItem>
              Enables structured retrieval of <Emphasis>tickets</Emphasis>,{" "}
              <Emphasis>summaries</Emphasis>, and{" "}
              <Emphasis>engineering context</Emphasis> from sprint and epic
              data without leaving the assistant surface.
            </ListItem>
            <ListItem>
              Generates <Emphasis>next-step suggestions</Emphasis> grounded in
              the current sprint state to reduce context switching during
              implementation and planning.
            </ListItem>
          </List>
        </Card>
        <Card>
          <CardTitle>AI Documentation Workflow</CardTitle>
          <CardSubtitle>
            Personal productivity system · Claude, Codex, Obsidian, Jira
          </CardSubtitle>
          <List>
            <ListItem>
              Exploring an <Emphasis>AI-assisted documentation workflow</Emphasis>{" "}
              that connects development activity, Jira context, Claude/Codex
              outputs, and Obsidian notes.
            </ListItem>
            <ListItem>
              Automates <Emphasis>technical knowledge capture</Emphasis> across
              tickets, code changes, and architecture decisions so context
              compounds instead of decaying.
            </ListItem>
            <ListItem>
              Maintains <Emphasis>reusable engineering documentation</Emphasis>{" "}
              and decision records that stay close to where the work actually
              happens.
            </ListItem>
          </List>
        </Card>
      </Cards>
      <StackWrapper>
        <StackTitle>AI Engineering Stack</StackTitle>
        <StackList>
          {AI_STACK.map(skill => (
            <StackTag key={skill}>{skill}</StackTag>
          ))}
        </StackList>
      </StackWrapper>
    </Section>
  );
};

export default AIExperience;
