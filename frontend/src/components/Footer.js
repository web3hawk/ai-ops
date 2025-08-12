import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <div className="footer-logo">
              <h3>智链云维</h3>
              <p>面向多云与云原生环境的智能运维平台，提供可观测、可审计、可自愈的全链路自动化运维闭环。</p>
            </div>
          </div>
          
          <div className="footer-section">
            <h4>产品</h4>
            <ul className="footer-links">
              <li><Link to="/product">统一数据底座</Link></li>
              <li><Link to="/product">智能体编排</Link></li>
              <li><Link to="/product">AI 异常检测</Link></li>
              <li><Link to="/product">区块链账本</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>解决方案</h4>
            <ul className="footer-links">
              <li><Link to="/case-studies">多云监控</Link></li>
              <li><Link to="/case-studies">成本优化</Link></li>
              <li><Link to="/case-studies">自动化运维</Link></li>
              <li><Link to="/case-studies">合规审计</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>资源</h4>
            <ul className="footer-links">
              <li><Link to="/blog">博客</Link></li>
              <li><Link to="/documentation">API 文档</Link></li>
              <li><Link to="/community">开发者社区</Link></li>
              <li><Link to="/case-studies">客户案例</Link></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>支持</h4>
            <ul className="footer-links">
              <li><a href="mailto:support@zhilianyunwei.com">技术支持</a></li>
              <li><a href="mailto:sales@zhilianyunwei.com">商务咨询</a></li>
              <li><Link to="/documentation">帮助中心</Link></li>
              <li><a href="tel:400-123-4567">400-123-4567</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <div className="footer-bottom-content">
            <div className="footer-copyright">
              <p>&copy; 2025 智链云维科技有限公司. 保留所有权利.</p>
            </div>
            <div className="footer-legal">
              <Link to="/privacy">隐私政策</Link>
              <Link to="/terms">服务条款</Link>
              <span>ICP备案号：京ICP备2024000000号</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;