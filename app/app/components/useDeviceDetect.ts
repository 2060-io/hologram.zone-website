'use client';

import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'desktop' | 'unknown';

const useDeviceDetect = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>('unknown');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor;
    const isMobile =
      /android|iPad|iPhone|iPod|Mobile/.test(userAgent) ||
      (/Macintosh/.test(userAgent) && 'ontouchend' in document) ||
      (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1) ||
      (navigator.vendor && navigator.vendor.indexOf('Apple') > -1);

    if (isMobile) {
      console.log('Dispositivo móvil detectado');
      setDeviceType('mobile');
    } else {
      console.log('Dispositivo de escritorio detectado');
      setDeviceType('desktop');
    }
  }, []);

  return deviceType;
};

export default useDeviceDetect;