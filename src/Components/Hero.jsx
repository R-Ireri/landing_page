import { Flex } from 'antd';
import { Col, Row, Typography, Button } from 'antd';

const { Title, Paragraph } = Typography;

const Hero = () => {
  return (
    <div
      style={{
        background: '#f0f2f5',
        padding: '50px 20px',
      }}
    >
      <Row
        align="middle"
        justify="center"
        gutter={[20, 40]}
        style={{ textAlign: 'center' }}
      >
        {/* Left Column (Spans 14 on larger screens) */}
        <Col xs={24} md={14}>
          <div style={{ textAlign: 'center' }}>
            <Title level={1} style={{ color: '#001529', fontWeight: 'bold' }}>
              Welcome to Tausi
            </Title>
            <Paragraph
              style={{
                fontSize: '16px',
                lineHeight: '1.8',
                color: '#555',
              }}
            >
              Igniting brilliance, fostering resilience, and crafting a legacy
              of empowered women who dare to dream, lead, and transform. Tausi
              is more than a program—it’s a symphony of mentorship, education,
              and boundless opportunity, orchestrated to uplift and inspire.
              <br />
              ✨ Together, we don’t just empower women—we shape the future. ✨
            </Paragraph>
            <Button
              type="primary"
              size="large"
              style={{
                marginTop: '20px',
                backgroundColor: '#1890ff',
                border: 'none',
              }}
            >
              Get Started
            </Button>
          </div>
        </Col>

        {/* Right Column (Spans 10 on larger screens) */}
        <Col xs={24} md={10}>
          <div>
            <img
              src="https://thumbs.dreamstime.com/b/peacock-face-bird-sticker-isolated-tansparent-background-png-logo-generative-ai-277306335.jpg"
              alt="Hero Illustration"
              style={{
                width: '100%',
                maxWidth: '400px',
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
              }}
            />
          </div>
        </Col>
      </Row>
    </div>
  );
};

export default Hero;