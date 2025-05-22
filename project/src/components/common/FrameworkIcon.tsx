import React from 'react';
import { Code2, Package, Puzzle } from 'lucide-react';

interface FrameworkIconProps {
  framework: string;
  size?: number;
  className?: string;
}

const FrameworkIcon: React.FC<FrameworkIconProps> = ({ 
  framework, 
  size = 16, 
  className = ''
}) => {
  const getFrameworkIcon = () => {
    const lowerCaseFramework = framework.toLowerCase();
    
    if (lowerCaseFramework.includes('react')) {
      return (
        <div className={`text-[#61DAFB] ${className}`}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z" fill="currentColor" />
            <path fillRule="evenodd" clipRule="evenodd" d="M12 21C14.4853 21 16.5 18.9853 16.5 16.5C16.5 15.9839 16.0161 15.5 15.5 15.5H8.5C7.98394 15.5 7.5 15.9839 7.5 16.5C7.5 18.9853 9.51472 21 12 21ZM8.5 14.5H15.5C16.0161 14.5 16.5 14.0161 16.5 13.5C16.5 11.0147 14.4853 9 12 9C9.51472 9 7.5 11.0147 7.5 13.5C7.5 14.0161 7.98394 14.5 8.5 14.5Z" fill="currentColor" />
            <path d="M12 8C13.6569 8 15 6.65685 15 5C15 3.34315 13.6569 2 12 2C10.3431 2 9 3.34315 9 5C9 6.65685 10.3431 8 12 8Z" fill="currentColor" />
          </svg>
        </div>
      );
    } 
    
    if (lowerCaseFramework.includes('next')) {
      return (
        <div className={`text-white ${className}`}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11.572 20.253C11.4007 20.253 11.2293 20.2045 11.0865 20.1073L4.78458 15.7373C4.44169 15.492 4.23611 15.1248 4.23611 14.7334V6.01955C4.23611 5.62815 4.44169 5.25218 4.78458 5.00689L11.0865 0.646245C11.372 0.452008 11.7721 0.452008 12.0576 0.646245L18.3595 5.01643C18.7024 5.25218 18.908 5.61861 18.908 6.01001V14.7239C18.908 15.1153 18.7024 15.492 18.3595 15.7373L12.0576 20.1073C11.9148 20.2045 11.7434 20.253 11.572 20.253ZM12.1148 2.18343L5.81288 6.5535V14.1994L12.1148 18.5695L18.4167 14.1994V6.5535L12.1148 2.18343Z" fill="currentColor"/>
            <path d="M11.5722 20.2527C11.4293 20.2527 11.2865 20.2233 11.1532 20.1552C10.8677 20.0197 10.6868 19.7359 10.6868 19.4233V10.4403C10.6868 10.0298 11.0201 9.69641 11.4294 9.69641C11.8387 9.69641 12.172 10.0298 12.172 10.4403V17.9932L17.3458 14.3659C17.6885 14.1301 18.1455 14.2179 18.381 14.5609C18.6164 14.9039 18.5289 15.3613 18.1861 15.5971L12.0005 19.8051C11.8672 20.0102 11.7149 20.2527 11.5722 20.2527Z" fill="currentColor"/>
            <path d="M17.7459 10.4116C17.3366 10.4116 17.0033 10.0782 17.0033 9.66772V6.58229L12.1719 3.18447L7.34049 6.58229V9.66772C7.34049 10.0771 7.00714 10.4116 6.59787 10.4116C6.1886 10.4116 5.85524 10.0782 5.85524 9.66772V6.0106C5.85524 5.61875 6.06083 5.25186 6.40371 5.00657L11.1152 1.62685C11.4007 1.43261 11.8009 1.43261 12.0864 1.62685L16.7979 5.00657C17.1408 5.25186 17.3463 5.61875 17.3463 6.0106V9.66772C17.3463 10.0782 17.0552 10.4116 17.7459 10.4116Z" fill="currentColor"/>
          </svg>
        </div>
      );
    }
    
    if (lowerCaseFramework.includes('vue')) {
      return (
        <div className={`text-[#42B883] ${className}`}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.1143 3H15L12 7.8L9.42857 3H0L12 24L24 3H19.1143ZM3 5.14286H5.57143L12 16.2857L18.4286 5.14286H21L12 20.5714L3 5.14286Z" fill="currentColor"/>
          </svg>
        </div>
      );
    }
    
    if (lowerCaseFramework.includes('nuxt')) {
      return (
        <div className={`text-[#00DC82] ${className}`}>
          <svg width={size} height={size} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M19.7544 18.5957H21.6089C20.7444 20.5136 18.7811 21.8524 16.516 21.8524C13.0729 21.8524 10.2872 19.0698 10.2872 15.6335C10.2872 12.1903 13.0729 9.41455 16.516 9.41455C18.7811 9.41455 20.7444 10.7534 21.6089 12.6713H19.7544C19.0188 11.5172 17.8577 10.7465 16.516 10.7465C13.8085 10.7465 11.62 12.9327 11.62 15.6368C11.62 18.341 13.8085 20.5272 16.516 20.5272C17.8645 20.5272 19.0188 19.7565 19.7544 18.5957Z" fill="currentColor"/>
            <path d="M22.3778 12.6712L22.8149 13.3488H24L23.086 12.0032L22.3778 12.6712Z" fill="currentColor"/>
            <path d="M22.8149 17.918L22.3778 18.5957L23.086 19.2636L24 17.918H22.8149Z" fill="currentColor"/>
            <path d="M10.1616 9.42839L6.87999 14.4116L3.74822 9.42839H0L6.87999 21.8524L13.7531 9.42839H10.1616Z" fill="currentColor"/>
          </svg>
        </div>
      );
    }
    
    // Default icon if no specific framework is matched
    return <Puzzle size={size} className={className} />;
  };

  return getFrameworkIcon();
};

export default FrameworkIcon;