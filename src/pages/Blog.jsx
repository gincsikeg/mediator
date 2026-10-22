import { Link } from 'react-router-dom'
import { posts } from '../data/posts.js'
import { img } from '../lib/asset.js'

export default function Blog() {
  return (
    <>
      <section className="page-hero">
        <div className="wrap">
          <span className="eyebrow eyebrow-line">Blog</span>
          <h1>Gondolatok pénzről,<br />konfliktusról, megoldásról.</h1>
        </div>
      </section>

      <section className="section">
        <div className="wrap">
          <div className="post-grid">
            {posts.map((p) => (
              <Link className="post-card" to={`/blog/${p.slug}`} key={p.slug}>
                <div className="post-card-img">
                  <img src={img(p.image)} alt={p.title} />
                </div>
                <div className="post-card-body">
                  <div className="post-meta">{p.category} · {p.date}</div>
                  <h3>{p.title}</h3>
                  <p>{p.lead}</p>
                  <span className="svc-more">Elolvasom →</span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="cta-band">
        <div className="wrap">
          <div>
            <h3>Egy cikk kevés – beszéljünk a te helyzetedről.</h3>
          </div>
          <Link to="/kapcsolat" className="btn btn-gold">Kapcsolat</Link>
        </div>
      </section>
    </>
  )
}
