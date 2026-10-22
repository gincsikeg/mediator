import { useParams, Link } from 'react-router-dom'
import { getPost } from '../data/posts.js'
import { img } from '../lib/asset.js'
import NotFound from './NotFound.jsx'

export default function BlogPost() {
  const { slug } = useParams()
  const post = getPost(slug)
  if (!post) return <NotFound />

  return (
    <>
      <section className="page-hero">
        <div className="wrap" style={{ maxWidth: 820 }}>
          <span className="eyebrow eyebrow-line">{post.category} · {post.date}</span>
          <h1 style={{ fontSize: 'clamp(30px, 4.5vw, 48px)' }}>{post.title}</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <article className="article">
            <div className="article-hero-img">
              <img src={img(post.image)} alt={post.title} />
            </div>
            <p className="lead">{post.lead}</p>
            {post.body.map((block, i) => {
              if (block.type === 'h') return <h2 key={i}>{block.text}</h2>
              if (block.type === 'img')
                return (
                  <div className="article-hero-img" key={i} style={{ aspectRatio: '3 / 2', margin: '32px 0' }}>
                    <img src={img(block.src)} alt={post.title} />
                  </div>
                )
              if (block.type === 'ul')
                return (
                  <ul key={i}>
                    {block.items.map((it, j) => (
                      <li key={j}>{it}</li>
                    ))}
                  </ul>
                )
              return <p key={i}>{block.text}</p>
            })}

            <div style={{ marginTop: 44, paddingTop: 32, borderTop: '1px solid var(--border-soft)', display: 'flex', gap: 14, flexWrap: 'wrap' }}>
              <Link to="/kapcsolat" className="btn btn-gold">Beszéljünk róla</Link>
              <Link to="/blog" className="btn btn-outline">← Vissza a blogra</Link>
            </div>
          </article>
        </div>
      </section>
    </>
  )
}
