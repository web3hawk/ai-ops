import React from 'react';
import { Link } from 'react-router-dom';

const CaseStudies = () => {
  const caseStudies = [
    {
      title: '某大型银行多云成本优化',
      industry: '金融',
      challenge: '跨 AWS、阿里云、腾讯云的资源成本难以统一管理，月度成本超支 30%，缺乏有效的成本分摊机制。',
      solution: '部署智链云维区块链账本模块，实现多云成本实时上链记录，建立透明可追溯的成本分摊体系。',
      results: [
        '成本透明度提升 95%',
        '月度成本节约 25%',
        '审计效率提升 80%',
        '合规性 100% 满足'
      ],
      metrics: {
        '成本节约': '25%',
        '审计效率': '80%',
        '透明度': '95%'
      },
      icon: '🏦'
    },
    {
      title: '互联网企业故障自愈实践',
      industry: '互联网',
      challenge: '微服务架构下故障定位困难，平均故障恢复时间 45 分钟，运维人员疲于应付重复性故障。',
      solution: '集成 AI 异常检测和智能体编排模块，构建从异常发现到自动修复的完整闭环。',
      results: [
        '故障恢复时间缩短至 5 分钟',
        '自动化故障处理率 85%',
        '运维人员工作效率提升 60%',
        '系统稳定性提升 99.9%'
      ],
      metrics: {
        '恢复时间': '5分钟',
        '自动化率': '85%',
        '效率提升': '60%'
      },
      icon: '🌐'
    },
    {
      title: 'SaaS 平台多租户监控',
      industry: 'SaaS',
      challenge: '多租户环境下日志数据量巨大，传统监控工具性能瓶颈明显，客户数据隔离要求严格。',
      solution: '采用统一数据底座架构，日志数据池支持租户隔离，实现高性能日志处理和检索。',
      results: [
        '日志处理性能提升 10 倍',
        '查询响应时间 &lt; 200ms',
        '数据隔离安全性 100%',
        '存储成本降低 40%'
      ],
      metrics: {
        '性能提升': '10倍',
        '响应时间': '200ms',
        '成本降低': '40%'
      },
      icon: '☁️'
    }
  ];

  const industries = [
    { name: '金融服务', icon: '🏦', description: '银行、保险、证券等金融机构' },
    { name: '互联网', icon: '🌐', description: '电商、社交、游戏等互联网企业' },
    { name: 'SaaS', icon: '☁️', description: 'SaaS 服务提供商和云原生企业' },
    { name: '制造业', icon: '🏭', description: '智能制造和工业互联网企业' }
  ];

  return (
    <div className="case-studies-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>客户案例</h1>
            <p>
              看看我们的客户如何通过智链云维平台实现智能运维转型，
              解决多云环境下的运维挑战
            </p>
          </div>
        </div>
      </section>

      {/* Case Studies */}
      <section className="section">
        <div className="container">
          <h2 className="section-title">成功案例</h2>
          <div className="case-studies-grid">
            {caseStudies.map((caseStudy, index) => (
              <div key={index} className="case-study-card">
                <div className="case-header">
                  <div className="case-icon">{caseStudy.icon}</div>
                  <div className="case-meta">
                    <h3>{caseStudy.title}</h3>
                    <span className="industry-tag">{caseStudy.industry}</span>
                  </div>
                </div>
                
                <div className="case-content">
                  <div className="case-section">
                    <h4>挑战</h4>
                    <p>{caseStudy.challenge}</p>
                  </div>
                  
                  <div className="case-section">
                    <h4>解决方案</h4>
                    <p>{caseStudy.solution}</p>
                  </div>
                  
                  <div className="case-section">
                    <h4>成果</h4>
                    <ul className="results-list">
                      {caseStudy.results.map((result, idx) => (
                        <li key={idx}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>

                <div className="case-metrics">
                  {Object.entries(caseStudy.metrics).map(([key, value], idx) => (
                    <div key={idx} className="metric">
                      <span className="metric-value">{value}</span>
                      <span className="metric-label">{key}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="industries-section section">
        <div className="container">
          <h2 className="section-title">服务行业</h2>
          <p className="section-subtitle">
            我们为各行业提供定制化的智能运维解决方案
          </p>
          <div className="industries-grid">
            {industries.map((industry, index) => (
              <div key={index} className="industry-card card">
                <div className="industry-icon">{industry.icon}</div>
                <h3>{industry.name}</h3>
                <p>{industry.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="testimonials-section section">
        <div className="container">
          <h2 className="section-title">客户评价</h2>
          <div className="testimonials-grid">
            <div className="testimonial-card card">
              <p>"智链云维平台帮助我们实现了真正的成本透明化，区块链技术确保了审计数据的可信度。"</p>
              <div className="testimonial-author">
                <strong>— 某大型银行 CTO</strong>
              </div>
            </div>
            <div className="testimonial-card card">
              <p>"从人工运维到智能自愈，我们的故障处理效率提升了 10 倍，团队终于可以专注于业务创新了。"</p>
              <div className="testimonial-author">
                <strong>— 互联网公司运维总监</strong>
              </div>
            </div>
            <div className="testimonial-card card">
              <p>"多租户环境下的日志处理性能提升显著，客户满意度大幅提高。"</p>
              <div className="testimonial-author">
                <strong>— SaaS 企业技术负责人</strong>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="cta-section">
        <div className="container">
          <h2>开始您的智能运维之旅</h2>
          <p>联系我们，了解智链云维如何帮助您的企业实现运维转型</p>
          <div className="cta-buttons">
            <a href="mailto:sales@zhilianyunwei.com" className="btn btn-primary">
              预约演示
            </a>
            <Link to="/product" className="btn btn-secondary">
              了解产品
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CaseStudies;