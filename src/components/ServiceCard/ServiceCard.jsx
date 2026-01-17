import PropTypes from "prop-types";
import { Card, Typography } from "antd";
import useInViewport from "../../hooks/useInViewport";
import "./ServiceCard.css";

const { Title, Paragraph } = Typography;

/**
 * ServiceCard Component
 * Reusable card component for displaying service information
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.icon - Icon component to display
 * @param {string} props.title - Service title
 * @param {string} props.description - Service description
 */
function ServiceCard({ icon, title, description }) {
  const [ref, isInViewport] = useInViewport();

  return (
    <Card 
      ref={ref}
      className={`service-card ${isInViewport ? 'service-card-visible' : ''}`} 
      bordered={false}
    >
      <div className="service-card-icon">{icon}</div>
      <Title level={4} className="service-card-title">
        {title}
      </Title>
      <Paragraph className="service-card-description">{description}</Paragraph>
    </Card>
  );
}

ServiceCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ServiceCard;
