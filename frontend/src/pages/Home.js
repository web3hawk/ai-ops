import React from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const features = [
    {
      icon: '🏗️',
      title: '统一数据底座',
      description: '多源日志采集、对象存储数据池、区块链数据池三位一体，构建企业级数据基础设施。',
      details: ['日志数据池：实时索引与搜索', '对象存储：冷热分层归档', '区块链池：不可篡改的成本账本']
    },
    {
      icon: '🤖',
      title: '智能体编排',
      description: '基于 n8n 工作流引擎，提供 200+ 原子节点，可视化拖拽构建自动化运维流程。',
      details: ['可视化工作流设计', '版本管理与一键回滚', 'Shell/HTTP/K8s/云API 集成']
    },
    {
      icon: '🧠',
      title: 'AI 异常检测',
      description: '基于无监督学习模型，5分钟内发现异常，根因定位准确率≥60%，自动生成修复建议。',
      details: ['CPU/内存/网络/磁盘监控', '日志模式异常检测', '知识图谱根因分析']
    },
    {
      icon: '🔗',
      title: '区块链账本',
      description: '运维成本实时上链，支持国密算法，提供不可篡改的审计报告，满足合规要求。',
      details: ['成本数据实时上链', 'PDF审计报告导出', '国密算法合规支持']
    }
  ];

  const stats = [
    { number: '99.9%', label: '系统可用性 SLA' },
    { number: '50万+', label: '日志处理 TPS/分钟' },
    { number: '<30s', label: '区块链上链延迟' },
    { number: '200+', label: '工作流原子节点' }
  ];

  const useCases = [
    {
      title: '多云成本监控',
      description: '统一管理 AWS、阿里云、腾讯云、华为云费用，实现成本透明化和优化建议。',
      icon: '☁️'
    },
    {
      title: '故障自愈闭环',
      description: '从异常检测到根因定位，再到自动修复，构建完整的故障处理闭环。',
      icon: '🔄'
    },
    {
      title: '合规审计报告',
      description: '区块链技术确保审计数据不可篡改，满足金融行业等保三级要求。',
      icon: '📋'
    }
  ];

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>智链云维</h1>
            <p>
              面向多云与云原生环境，基于统一数据底座 + 区块链成本账本 + AI 智能体编排，
              提供可观测、可审计、可自愈的全链路自动化运维闭环
            </p>
            <div className="hero-buttons">
              <Link to="/product" className="btn btn-primary">
                了解产品
              </Link>
              <Link to="/documentation" className="btn btn-secondary">
                免费试用
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">核心能力</h2>
          <p className="section-subtitle">
            四大核心模块协同工作，构建企业级智能运维平台
          </p>
          <div className="features-grid">
            {features.map((feature, index) => (
              <div key={index} className="feature-card">
                <div className="feature-icon">{feature.icon}</div>
                <h3>{feature.title}</h3>
                <p>{feature.description}</p>
                <ul className="feature-details">
                  {feature.details.map((detail, idx) => (
                    <li key={idx}>{detail}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="container">
          <h2 className="section-title">性能指标</h2>
          <div className="stats-grid">
            {stats.map((stat, index) => (
              <div key={index} className="stat-item">
                <span className="stat-number">{stat.number}</span>
                <span className="stat-label">{stat.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">应用场景</h2>
          <p className="section-subtitle">
            服务中大型企业，解决多云环境下的运维痛点
          </p>
          <div className="use-cases-grid">
            {useCases.map((useCase, index) => (
              <div key={index} className="use-case-card card">
                <div className="use-case-icon">{useCase.icon}</div>
                <h3>{useCase.title}</h3>
                <p>{useCase.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="cta-section">
        <div className="container">
          <h2>开启智能运维新时代</h2>
          <p>立即体验智链云维平台，让 AI 驱动您的运维自动化</p>
          <div className="cta-buttons">
            <Link to="/case-studies" className="btn btn-primary">
              查看案例
            </Link>
            <Link to="/community" className="btn btn-secondary">
              加入社区
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;