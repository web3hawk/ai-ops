import React from 'react';
import { Link } from 'react-router-dom';

const Community = () => {
  const communityChannels = [
    {
      name: 'GitHub',
      description: '查看源代码、提交问题、贡献代码',
      icon: '💻',
      link: 'https://github.com/zhilian-yunwei',
      members: '2.5K',
      activity: '活跃'
    },
    {
      name: '微信群',
      description: '加入微信技术交流群，实时讨论技术问题',
      icon: '💬',
      link: '#wechat-group',
      members: '500+',
      activity: '非常活跃'
    },
    {
      name: 'QQ 群',
      description: 'QQ 技术交流群：123456789',
      icon: '🐧',
      link: '#qq-group',
      members: '800+',
      activity: '活跃'
    },
    {
      name: '知乎专栏',
      description: '深度技术文章和行业洞察分享',
      icon: '📚',
      link: 'https://zhihu.com/zhilian-yunwei',
      members: '1.2K',
      activity: '定期更新'
    }
  ];

  const events = [
    {
      title: '智能运维技术沙龙（北京站）',
      date: '2025-08-25',
      location: '北京·中关村',
      type: '线下活动',
      description: '探讨 AI 在运维领域的最新应用，分享实战经验和技术趋势。',
      status: '报名中'
    },
    {
      title: '区块链在企业成本管理中的应用',
      date: '2025-08-30',
      location: '在线直播',
      type: '在线研讨会',
      description: '深入讲解区块链技术如何确保成本数据的透明性和可信度。',
      status: '即将开始'
    },
    {
      title: 'Kubernetes 运维自动化最佳实践',
      date: '2025-09-05',
      location: '上海·浦东',
      type: '培训工作坊',
      description: '3天intensive培训，从入门到专家级的K8s运维自动化实践。',
      status: '报名中'
    }
  ];

  const contributors = [
    {
      name: '张工程师',
      role: '核心开发者',
      avatar: '👨‍💻',
      contributions: '主导 AI 异常检测模块开发',
      github: 'zhang-engineer'
    },
    {
      name: '李架构师',
      role: '技术顾问',
      avatar: '👩‍💼',
      contributions: '区块链架构设计和优化',
      github: 'li-architect'
    },
    {
      name: '王运维',
      role: '社区贡献者',
      avatar: '👨‍🔧',
      contributions: '文档完善和最佳实践分享',
      github: 'wang-ops'
    },
    {
      name: '赵开发',
      role: '活跃贡献者',
      avatar: '👩‍💻',
      contributions: '多云适配和API开发',
      github: 'zhao-dev'
    }
  ];

  const resources = [
    {
      title: '开发者指南',
      description: '从零开始学习平台开发和扩展',
      icon: '📖',
      link: '/documentation'
    },
    {
      title: '插件开发',
      description: '学习如何开发自定义插件和扩展',
      icon: '🔌',
      link: '#plugin-dev'
    },
    {
      title: '开源项目',
      description: '参与开源项目，贡献您的代码',
      icon: '🌟',
      link: 'https://github.com/zhilian-yunwei'
    },
    {
      title: '论坛讨论',
      description: '在社区论坛分享经验和提问',
      icon: '💭',
      link: '#forum'
    }
  ];

  return (
    <div className="community-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>开发者社区</h1>
            <p>
              加入智链云维开发者社区，与全球开发者和运维专家交流经验，
              共同推动智能运维技术的发展
            </p>
            <div className="community-stats">
              <div className="stat">
                <span className="stat-number">10K+</span>
                <span className="stat-label">活跃用户</span>
              </div>
              <div className="stat">
                <span className="stat-number">500+</span>
                <span className="stat-label">贡献者</span>
              </div>
              <div className="stat">
                <span className="stat-number">50+</span>
                <span className="stat-label">开源项目</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Community Channels */}
      <section className="channels-section section">
        <div className="container">
          <h2 className="section-title">加入社区</h2>
          <p className="section-subtitle">
            选择您喜欢的方式加入我们的技术社区
          </p>
          <div className="channels-grid">
            {communityChannels.map((channel, index) => (
              <div key={index} className="channel-card card">
                <div className="channel-header">
                  <div className="channel-icon">{channel.icon}</div>
                  <div className="channel-info">
                    <h3>{channel.name}</h3>
                    <div className="channel-meta">
                      <span className="members">{channel.members} 成员</span>
                      <span className={`activity ${channel.activity === '非常活跃' ? 'very-active' : 'active'}`}>
                        {channel.activity}
                      </span>
                    </div>
                  </div>
                </div>
                <p>{channel.description}</p>
                <a href={channel.link} className="btn btn-secondary">
                  立即加入
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events */}
      <section className="events-section section">
        <div className="container">
          <h2 className="section-title">社区活动</h2>
          <p className="section-subtitle">
            参加线上线下技术活动，与专家面对面交流
          </p>
          <div className="events-grid">
            {events.map((event, index) => (
              <div key={index} className="event-card card">
                <div className="event-header">
                  <div className="event-date">
                    <span className="month">{event.date.split('-')[1]}月</span>
                    <span className="day">{event.date.split('-')[2]}</span>
                  </div>
                  <div className="event-meta">
                    <span className="event-type">{event.type}</span>
                    <span className={`event-status ${event.status === '报名中' ? 'open' : 'coming'}`}>
                      {event.status}
                    </span>
                  </div>
                </div>
                <h3>{event.title}</h3>
                <p className="event-location">📍 {event.location}</p>
                <p>{event.description}</p>
                <button className="btn btn-primary">
                  {event.status === '报名中' ? '立即报名' : '关注活动'}
                </button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contributors */}
      <section className="contributors-section section">
        <div className="container">
          <h2 className="section-title">核心贡献者</h2>
          <p className="section-subtitle">
            感谢这些优秀的开发者为智链云维项目做出的贡献
          </p>
          <div className="contributors-grid">
            {contributors.map((contributor, index) => (
              <div key={index} className="contributor-card card">
                <div className="contributor-avatar">{contributor.avatar}</div>
                <h3>{contributor.name}</h3>
                <span className="contributor-role">{contributor.role}</span>
                <p>{contributor.contributions}</p>
                <a href={`https://github.com/${contributor.github}`} className="github-link">
                  @{contributor.github}
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Resources */}
      <section className="resources-section section">
        <div className="container">
          <h2 className="section-title">开发者资源</h2>
          <div className="resources-grid">
            {resources.map((resource, index) => (
              <div key={index} className="resource-card card">
                <div className="resource-icon">{resource.icon}</div>
                <h3>{resource.title}</h3>
                <p>{resource.description}</p>
                <Link to={resource.link} className="resource-link">
                  了解更多 →
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contribution CTA */}
      <section className="contribution-cta section">
        <div className="container">
          <div className="cta-content">
            <h2>成为贡献者</h2>
            <p>
              无论您是经验丰富的开发者还是刚入门的新手，我们都欢迎您的贡献。
              从代码提交到文档完善，从bug报告到功能建议，每一份贡献都很宝贵。
            </p>
            <div className="contribution-types">
              <div className="contribution-type">
                <h4>🔧 代码贡献</h4>
                <p>提交代码、修复bug、开发新功能</p>
              </div>
              <div className="contribution-type">
                <h4>📝 文档完善</h4>
                <p>改进文档、编写教程、翻译内容</p>
              </div>
              <div className="contribution-type">
                <h4>🐛 问题反馈</h4>
                <p>报告bug、提供反馈、测试功能</p>
              </div>
            </div>
            <div className="cta-buttons">
              <a href="https://github.com/zhilian-yunwei" className="btn btn-primary">
                开始贡献
              </a>
              <Link to="/documentation" className="btn btn-secondary">
                查看指南
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Community;