import PropTypes from "prop-types";
import { Typography } from "antd";
import useInViewport from "../../hooks/useInViewport";
import "./ContactItem.css";

const { Title, Paragraph } = Typography;

/**
 * ContactItem Component
 * Reusable component for contact method items
 * 
 * @param {Object} props - Component props
 * @param {ReactNode} props.icon - Icon component to display
 * @param {string} props.title - Contact method title
 * @param {string} props.text - Contact method description
 * @param {Function} props.onClick - Click handler function
 */
function ContactItem({ icon, title, text, onClick }) {
  const [ref, isInViewport] = useInViewport();

  return (
    <div 
      ref={ref}
      className={`contact-item ${isInViewport ? 'contact-item-visible' : ''}`}
      onClick={onClick} 
      role="button" 
      tabIndex={0} 
      onKeyPress={(e) => e.key === 'Enter' && onClick()}
    >
      <div className="contact-item-icon">{icon}</div>
      <div className="contact-item-info">
        <Title level={5} className="contact-item-title">
          {title}
        </Title>
        <Paragraph className="contact-item-text">{text}</Paragraph>
      </div>
    </div>
  );
}

ContactItem.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
};

export default ContactItem;
