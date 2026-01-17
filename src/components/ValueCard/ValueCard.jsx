import PropTypes from "prop-types";
import { Card, Typography } from "antd";
import useInViewport from "../../hooks/useInViewport";
import "./ValueCard.css";

const { Title, Paragraph } = Typography;

/**
 * ValueCard Component
 * Reusable card component for displaying company values
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.icon - Icon component to display
 * @param {string} props.title - Value title
 * @param {string} props.description - Value description
 */
function ValueCard({ icon, title, description }) {
  const [ref, isInViewport] = useInViewport();

  return (
    <Card 
      ref={ref}
      className={`value-card ${isInViewport ? 'value-card-visible' : ''}`} 
      bordered={false}
    >
      <div className="value-card-icon">{icon}</div>
      <Title level={4} className="value-card-title">
        {title}
      </Title>
      <Paragraph className="value-card-description">{description}</Paragraph>
    </Card>
  );
}

ValueCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ValueCard;
