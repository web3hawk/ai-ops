import React from 'react';
import { Link } from 'react-router-dom';

const Product = () => {
  const modules = [
    {
      title: '日志数据池',
      description: '支持 Filebeat/Fluent Bit 采集器一键接入，提供全文检索与 Lucene 语法，99% 字段成功解析。',
      features: [
        '5 分钟内完成业务命名空间接入',
        '日志格式自动标准化（JSON/CSV/自定义 Grok）',
        '查询延迟 <500 ms（1 亿条以内）',
        '内置异常检测规则模板，误报率 <5%'
      ],
      icon: '📋'
    },
    {
      title: '对象存储数据池',
      description: '支持 AWS S3、阿里云 OSS、MinIO 作为后端，提供生命周期策略和预签名 URL。',
      features: [
        '单桶 1 TB 数据迁移完成无丢失',
        '生命周期策略（30 天热→冷→归档）',
        '策略生效延迟 <1 min',
        'RESTful API 生成预签名 URL（7天有效期）'
      ],
      icon: '🗄️'
    },
    {
      title: '区块链数据池',
      description: '运维成本实时上链，支持国密算法合规，提供不可篡改的审计报告。',
      features: [
        '运维成本实时上链，延迟 <30 s',
        '链上交易哈希查询 & PDF 审计报告导出',
        '支持国密算法（SM2/SM3/SM4）合规',
        '通过密评测试认证'
      ],
      icon: '⛓️'
    },
    {
      title: '智能体编排',
      description: '基于 n8n 工作流引擎，提供 200+ 原子节点，支持可视化拖拽和版本管理。',
      features: [
        '200+ 原子节点（Shell、HTTP、K8s、云 API、飞书/钉钉）',
        '节点可用率 ≥99.9%',
        '工作流版本管理 & 一键回滚 <10 s',
        '变量与密钥托管（KMS 集成），密钥不落盘'
      ],
      icon: '🔧'
    }
  ];

  const aiCapabilities = [
    {
      title: 'CPU/内存/网络/磁盘监控',
      description: '5 分钟内发现异常'
    },
    {
      title: '根因定位',
      description: '准确率 ≥60%，人工复核 top3 根因命中率'
    },
    {
      title: '自愈建议',
      description: '一键生成自愈工作流，可执行脚本覆盖率 ≥80%'
    }
  ];

  return (
    <div className="product-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>智能运维平台</h1>
            <p>
              基于统一数据底座 + 区块链成本账本 + AI 智能体编排，
              构建可观测、可审计、可自愈的企业级运维解决方案
            </p>
            <div className="hero-buttons">
              <Link to="/case-studies" className="btn btn-primary">
                查看案例
              </Link>
              <Link to="/documentation" className="btn btn-secondary">
                技术文档
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Core Modules */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">核心模块</h2>
          <p className="section-subtitle">
            四大数据处理模块，构建企业级智能运维基础设施
          </p>
          <div className="modules-grid">
            {modules.map((module, index) => (
              <div key={index} className="module-card card">
                <div className="module-icon">{module.icon}</div>
                <h3>{module.title}</h3>
                <p>{module.description}</p>
                <ul className="module-features">
                  {module.features.map((feature, idx) => (
                    <li key={idx}>{feature}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* AI Capabilities */}
      <section className="ai-section section">
        <div className="container">
          <h2 className="section-title">AI 异常检测</h2>
          <p className="section-subtitle">
            基于机器学习算法，提供智能化的异常检测和根因分析
          </p>
          <div className="ai-capabilities-grid">
            {aiCapabilities.map((capability, index) => (
              <div key={index} className="ai-capability-card card">
                <h3>{capability.title}</h3>
                <p>{capability.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Architecture */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">技术架构</h2>
          <div className="architecture-content">
            <div className="architecture-item">
              <h3>多云支持</h3>
              <p>支持 AWS、阿里云、腾讯云、华为云、私有云（OpenStack、K8s）</p>
            </div>
            <div className="architecture-item">
              <h3>高性能</h3>
              <p>日志写入 TPS ≥50万条/分钟，API P99 延迟 &lt;1s</p>
            </div>
            <div className="architecture-item">
              <h3>高可用</h3>
              <p>整体 SLA ≥99.9%，RTO/RPO ≤30min/≤10min</p>
            </div>
            <div className="architecture-item">
              <h3>安全合规</h3>
              <p>TLS 1.3/国密 HTTPS，AES-256/国密 SM4，等保三级认证</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>立即开始使用</h2>
          <p>体验智链云维平台，让 AI 驱动您的运维自动化</p>
          <div className="cta-buttons">
            <Link to="/documentation" className="btn btn-primary">
              免费试用
            </Link>
            <a href="mailto:sales@zhilianyunwei.com" className="btn btn-secondary">
              联系销售
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Product;