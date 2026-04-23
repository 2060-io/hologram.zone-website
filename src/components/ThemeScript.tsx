/**
 * Sets the theme class on <html> synchronously before first paint, to avoid
 * a flash of the wrong theme. Must be rendered inside <head>.
 */
const SCRIPT = `(function(){try{var k='hologram-theme';var s=localStorage.getItem(k);var t=(s==='light'||s==='dark')?s:(window.matchMedia('(prefers-color-scheme: light)').matches?'light':'dark');var r=document.documentElement;if(t==='light'){r.classList.add('light');r.classList.remove('dark');}else{r.classList.add('dark');r.classList.remove('light');}}catch(e){document.documentElement.classList.add('dark');}})();`;

export default function ThemeScript() {
  return <script dangerouslySetInnerHTML={{ __html: SCRIPT }} />;
}
