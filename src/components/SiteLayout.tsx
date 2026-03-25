import { Outlet } from 'react-router-dom'
import { useSiteScroll } from '../context/SiteScrollContext'
import { SiteFooter } from './SiteFooter'

export function SiteLayout() {
  const { showBackTop } = useSiteScroll()

  return (
    <div className="min-w-0 overflow-x-clip bg-slate-950 text-slate-100 selection:bg-cyan-400 selection:text-slate-900">
      <div className="scroll-progress fixed left-0 top-0 z-[60] h-[2px] w-full bg-transparent" aria-hidden>
        <div
          className="scroll-progress-bar h-full bg-gradient-to-r from-cyan-300 via-blue-400 to-violet-400"
          style={{ transform: 'scaleX(var(--scroll-progress))' }}
        />
      </div>

      <Outlet />

      <button
        type="button"
        className={`back-top fixed bottom-6 right-6 z-50 flex h-12 w-12 items-center justify-center rounded-full border border-cyan-400/40 bg-slate-900/90 text-lg text-cyan-200 shadow-lg backdrop-blur transition hover:bg-cyan-400/15 ${
          showBackTop ? 'back-top-visible' : ''
        }`}
        aria-label="Back to top"
        onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
      >
        ↑
      </button>

      <SiteFooter />
    </div>
  )
}
