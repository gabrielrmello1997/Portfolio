import {
  Body,
  Container,
  Head,
  Heading,
  Html,
  Preview,
  Section,
  Text,
} from "@react-email/components";

interface EmailTemplateProps {
  name: string;
  email: string;
  message: string;
}

const colors = {
  background: "#FFFFFF",
  primaryBlue: "#12161D",
  foreground: "#FFFFFF",
  paragraphGrey: "#A8A8A8",
  primaryOrange: "#F26A3D",
  border: "rgba(168, 168, 168, 0.18)",
};

export function EmailTemplate({ name, email, message }: EmailTemplateProps) {
  return (
    <Html>
      <Head />
      <Preview>New message from {name}</Preview>
      <Body
        style={{
          backgroundColor: colors.background,
          margin: 0,
          fontFamily: "Arial, Helvetica, sans-serif",
        }}
      >
        <Container style={{ margin: "0 auto", padding: "24px" }}>
          <Section
            style={{
              backgroundColor: colors.primaryBlue,
              border: `1px solid ${colors.border}`,
              borderRadius: "10px",
              padding: "24px",
            }}
          >
            <Heading
              style={{
                color: colors.foreground,
                fontSize: "28px",
                fontWeight: "700",
                lineHeight: "1.2",
                margin: "0 0 16px",
              }}
            >
              New message from <br />{" "}
              <span style={{ color: colors.primaryOrange }}>{name}</span>
            </Heading>

            <Text
              style={{
                color: colors.foreground,
                fontSize: "16px",
                fontWeight: "700",
                margin: "0 0 8px",
              }}
            >
              Email: <span style={{ color: colors.paragraphGrey, fontWeight: "400" }}>{email}</span>
            </Text>

            <Text
              style={{
                color: colors.foreground,
                fontSize: "16px",
                lineHeight: "1.4",
                margin: "0",
              }}
            >
              Message: {message}
            </Text>
          </Section>
        </Container>
      </Body>
    </Html>
  );
}
