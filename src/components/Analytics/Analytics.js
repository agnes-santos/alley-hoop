import { analytics } from '../../utils/fb.js';
import { useLocation } from 'react-router-dom';
import { useEffect } from 'react';

export default function Analytics() {
  let location = useLocation();
  useEffect(() => {
    const _analytics = analytics;
    if (typeof _analytics === 'object') {
      const page_path = location.pathname + location.search;

      _analytics.setCurrentScreen(page_path);
      _analytics.logEvent('page_view', { page_path });
    }
  }, [location]);
  return null;
}
