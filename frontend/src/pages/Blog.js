import React from 'react';
import { Link } from 'react-router-dom';

const Blog = () => {
  const blogPosts = [
    {
      title: '区块链技术在运维成本管理中的应用实践',
      excerpt: '探讨如何利用区块链技术实现运维成本的透明化管理，确保审计数据的不可篡改性，满足金融行业的合规要求。',
      author: '技术团队',
      date: '2025-08-10',
      category: '技术洞察',
      readTime: '8 分钟',
      tags: ['区块链', '成本管理', '审计']
    },
    {
      title: 'AI 驱动的异常检测：从理论到生产实践',
      excerpt: '深入分析无监督学习在运维异常检测中的应用，分享我们在提高检测准确率和降低误报率方面的经验。',
      author: 'AI 算法团队',
      date: '2025-08-08',
      category: '技术深度',
      readTime: '12 分钟',
      tags: ['人工智能', '异常检测', '机器学习']
    },
    {
      title: '多云环境下的统一监控架构设计',
      excerpt: '介绍如何构建跨 AWS、阿里云、腾讯云的统一监控体系，实现数据的标准化采集和处理。',
      author: '架构团队',
      date: '2025-08-05',
      category: '架构设计',
      readTime: '10 分钟',
      tags: ['多云', '监控', '架构']
    },
    {
      title: 'n8n 工作流引擎在智能运维中的最佳实践',
      excerpt: '分享基于 n8n 构建自动化运维工作流的经验，包括节点设计、版本管理和安全配置。',
      author: '运维团队',
      date: '2025-08-03',
      category: '最佳实践',
      readTime: '15 分钟',
      tags: ['工作流', 'n8n', '自动化']
    },
    {
      title: '智链云维 2.0 版本发布：全新的 AI 体验',
      excerpt: '智链云维 2.0 正式发布，新增智能根因分析、自愈建议生成等 AI 功能，运维效率再次提升。',
      author: '产品团队',
      date: '2025-08-01',
      category: '产品动态',
      readTime: '6 分钟',
      tags: ['产品发布', '新功能', 'AI']
    },
    {
      title: '容器化环境下的日志采集与分析策略',
      excerpt: '详细讲解 Kubernetes 环境下的日志采集方案，包括 Filebeat、Fluent Bit 的配置和性能优化。',
      author: '运维专家',
      date: '2025-07-28',
      category: '技术教程',
      readTime: '20 分钟',
      tags: ['Kubernetes', '日志', '容器']
    }
  ];

  const categories = [
    { name: '全部', count: 6 },
    { name: '技术洞察', count: 2 },
    { name: '产品动态', count: 1 },
    { name: '最佳实践', count: 2 },
    { name: '技术教程', count: 1 }
  ];

  const featuredPost = blogPosts[0];
  const recentPosts = blogPosts.slice(1);

  return (
    <div className="blog-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="container">
          <div className="hero-content">
            <h1>技术博客</h1>
            <p>
              探索智能运维的前沿技术，分享实战经验与行业洞察，
              与开发者和运维专家一起成长
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="featured-section section">
        <div className="container">
          <h2 className="section-title">精选文章</h2>
          <div className="featured-post card">
            <div className="featured-content">
              <div className="post-meta">
                <span className="category">{featuredPost.category}</span>
                <span className="date">{featuredPost.date}</span>
                <span className="read-time">{featuredPost.readTime}</span>
              </div>
              <h3>{featuredPost.title}</h3>
              <p>{featuredPost.excerpt}</p>
              <div className="post-footer">
                <div className="author">作者：{featuredPost.author}</div>
                <div className="tags">
                  {featuredPost.tags.map((tag, index) => (
                    <span key={index} className="tag">{tag}</span>
                  ))}
                </div>
              </div>
              <Link to="#" className="read-more-btn btn btn-primary">
                阅读全文
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="blog-grid-section section">
        <div className="container">
          <div className="blog-layout">
            {/* Sidebar */}
            <aside className="blog-sidebar">
              <div className="sidebar-widget">
                <h3>文章分类</h3>
                <ul className="categories-list">
                  {categories.map((category, index) => (
                    <li key={index}>
                      <a href="#" className="category-link">
                        {category.name} <span className="count">({category.count})</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="sidebar-widget">
                <h3>热门标签</h3>
                <div className="tags-cloud">
                  {['人工智能', '区块链', '多云', 'Kubernetes', '自动化', '监控', '日志分析', '工作流'].map((tag, index) => (
                    <span key={index} className="tag-cloud-item">{tag}</span>
                  ))}
                </div>
              </div>
            </aside>

            {/* Main Content */}
            <main className="blog-main">
              <div className="blog-posts-grid">
                {recentPosts.map((post, index) => (
                  <article key={index} className="blog-post-card card">
                    <div className="post-header">
                      <div className="post-meta">
                        <span className="category">{post.category}</span>
                        <span className="date">{post.date}</span>
                      </div>
                      <h3>{post.title}</h3>
                    </div>
                    
                    <div className="post-content">
                      <p>{post.excerpt}</p>
                    </div>
                    
                    <div className="post-footer">
                      <div className="post-info">
                        <span className="author">作者：{post.author}</span>
                        <span className="read-time">{post.readTime}</span>
                      </div>
                      <div className="tags">
                        {post.tags.map((tag, tagIndex) => (
                          <span key={tagIndex} className="tag">{tag}</span>
                        ))}
                      </div>
                      <Link to="#" className="read-more">
                        阅读更多 →
                      </Link>
                    </div>
                  </article>
                ))}
              </div>
              
              {/* Pagination */}
              <div className="pagination">
                <button className="btn btn-secondary">← 上一页</button>
                <span className="pagination-info">第 1 页，共 3 页</span>
                <button className="btn btn-secondary">下一页 →</button>
              </div>
            </main>
          </div>
        </div>
      </section>

      {/* Newsletter */}
      <section className="newsletter-section section">
        <div className="container">
          <div className="newsletter-card card">
            <h2>订阅我们的技术周报</h2>
            <p>获取最新的技术文章、产品动态和行业洞察</p>
            <div className="newsletter-form">
              <input 
                type="email" 
                placeholder="输入您的邮箱地址" 
                className="newsletter-input"
              />
              <button className="btn btn-primary">立即订阅</button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;