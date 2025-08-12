import React from 'react';
import { Link } from 'react-router-dom';

const Documentation = () => {
  const quickStartGuides = [
    {
      title: '5分钟快速开始',
      description: '快速部署智链云维平台，完成第一个监控任务',
      icon: '🚀',
      time: '5 分钟',
      level: '入门'
    },
    {
      title: '日志数据池配置',
      description: '配置 Filebeat/Fluent Bit 采集器，实现日志自动采集',
      icon: '📋',
      time: '15 分钟',
      level: '基础'
    },
    {
      title: '工作流编排入门',
      description: '使用 n8n 可视化编辑器创建您的第一个自动化工作流',
      icon: '🔧',
      time: '20 分钟',
      level: '进阶'
    },
    {
      title: 'AI 异常检测配置',
      description: '启用智能异常检测，配置告警规则和根因分析',
      icon: '🧠',
      time: '30 分钟',
      level: '高级'
    }
  ];

  const apiDocs = [
    {
      category: '日志数据池 API',
      endpoints: [
        { method: 'POST', path: '/api/logs/search', description: '日志查询与搜索' },
        { method: 'GET', path: '/api/logs/metrics', description: '日志统计指标' },
        { method: 'POST', path: '/api/logs/alerts', description: '创建日志告警规则' }
      ]
    },
    {
      category: '区块链数据池 API',
      endpoints: [
        { method: 'POST', path: '/api/blockchain/costs', description: '成本数据上链' },
        { method: 'GET', path: '/api/blockchain/audit', description: '审计报告查询' },
        { method: 'GET', path: '/api/blockchain/transactions', description: '交易记录查询' }
      ]
    },
    {
      category: '工作流 API',
      endpoints: [
        { method: 'POST', path: '/api/workflows/create', description: '创建工作流' },
        { method: 'GET', path: '/api/workflows/execute', description: '执行工作流' },
        { method: 'GET', path: '/api/workflows/history', description: '执行历史查询' }
      ]
    }
  ];

  const resources = [
    {
      title: '部署指南',
      description: '详细的安装部署文档，支持 Docker、Kubernetes 等多种部署方式',
      link: '#deployment-guide',
      icon: '⚙️'
    },
    {
      title: '配置参考',
      description: '完整的配置文件参考和最佳实践建议',
      link: '#configuration',
      icon: '📝'
    },
    {
      title: '故障排查',
      description: '常见问题解答和故障排查指南',
      link: '#troubleshooting',
      icon: '🔍'
    },
    {
      title: '性能调优',
      description: '系统性能优化建议和调优参数说明',
      link: '#performance',
      icon: '⚡'
    }
  ];

  return (
    <div className="documentation-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>技术文档</h1>
            <p>
              完整的技术文档、API 参考和快速入门指南，
              帮助您快速上手智链云维平台
            </p>
            <div className="hero-buttons">
              <Link to="#quick-start" className="btn btn-primary">
                快速开始
              </Link>
              <Link to="#api-docs" className="btn btn-secondary">
                API 文档
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Start Guides */}
      <section id="quick-start" className="section">
        <div className="container">
          <h2 className="section-title">快速入门</h2>
          <p className="section-subtitle">
            跟随我们的指导教程，快速掌握智链云维平台的核心功能
          </p>
          <div className="guides-grid">
            {quickStartGuides.map((guide, index) => (
              <div key={index} className="guide-card card">
                <div className="guide-header">
                  <div className="guide-icon">{guide.icon}</div>
                  <div className="guide-meta">
                    <span className="level">{guide.level}</span>
                    <span className="time">{guide.time}</span>
                  </div>
                </div>
                <h3>{guide.title}</h3>
                <p>{guide.description}</p>
                <Link to="#" className="guide-link">
                  开始教程 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* API Documentation */}
      <section id="api-docs" className="api-section section">
        <div className="container">
          <h2 className="section-title">API 文档</h2>
          <p className="section-subtitle">
            RESTful API 接口文档，支持完整的平台功能集成
          </p>
          <div className="api-docs-grid">
            {apiDocs.map((category, index) => (
              <div key={index} className="api-category-card card">
                <h3>{category.category}</h3>
                <div className="api-endpoints">
                  {category.endpoints.map((endpoint, idx) => (
                    <div key={idx} className="api-endpoint">
                      <div className="endpoint-method">
                        <span className={`method-badge ${endpoint.method.toLowerCase()}`}>
                          {endpoint.method}
                        </span>
                        <code className="endpoint-path">{endpoint.path}</code>
                      </div>
                      <p className="endpoint-description">{endpoint.description}</p>
                    </div>
                  ))}
                </div>
                <Link to="#" className="api-docs-link">
                  查看完整 API →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="resources-section section">
        <div className="container">
          <h2 className="section-title">更多资源</h2>
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <div key={index} className="resource-card card">
                <div className="resource-icon">{resource.icon}</div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <a href={resource.link} className="resource-link">
                  查看详情 →
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* SDK & Tools */}
      <section className="sdk-section section">
        <div className="container">
          <h2 className="section-title">SDK 与工具</h2>
          <div className="sdk-grid">
            <div className="sdk-card card">
              <h3>Python SDK</h3>
              <p>适用于 Python 开发者的官方 SDK，支持所有 API 功能。</p>
              <div className="code-snippet">
                <code>pip install zhilian-yunwei-sdk</code>
              </div>
              <Link to="#" className="btn btn-secondary">下载 SDK</Link>
            </div>
            
            <div className="sdk-card card">
              <h3>Go SDK</h3>
              <p>高性能 Go 语言 SDK，适合构建微服务和后端应用。</p>
              <div className="code-snippet">
                <code>go get github.com/zhilian/yunwei-go-sdk</code>
              </div>
              <Link to="#" className="btn btn-secondary">下载 SDK</Link>
            </div>
            
            <div className="sdk-card card">
              <h3>CLI 工具</h3>
              <p>命令行工具，支持批量操作和脚本自动化。</p>
              <div className="code-snippet">
                <code>npm install -g @zhilian/yunwei-cli</code>
              </div>
              <Link to="#" className="btn btn-secondary">下载 CLI</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Support */}
      <section className="support-section section">
        <div className="container">
          <h2 className="section-title">需要帮助？</h2>
          <div className="support-options">
            <div className="support-card card">
              <h3>技术支持</h3>
              <p>遇到技术问题？我们的专家团队随时为您提供帮助。</p>
              <a href="mailto:support@zhilianyunwei.com" className="btn btn-primary">
                联系技术支持
              </a>
            </div>
            
            <div className="support-card card">
              <h3>开发者社区</h3>
              <p>加入我们的开发者社区，与其他用户交流经验。</p>
              <Link to="/community" className="btn btn-secondary">
                加入社区
              </Link>
            </div>
            
            <div className="support-card card">
              <h3>培训服务</h3>
              <p>提供专业的培训服务，帮助您的团队快速上手。</p>
              <a href="mailto:training@zhilianyunwei.com" className="btn btn-secondary">
                了解培训
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Documentation;