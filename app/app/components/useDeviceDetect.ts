'use client';
import { useState, useEffect } from 'react';

type DeviceType = 'mobile' | 'tablet' | 'desktop' | 'unknown';

const useDeviceDetect = (): DeviceType => {
  const [deviceType, setDeviceType] = useState<DeviceType>('unknown');

  useEffect(() => {
    const userAgent = navigator.userAgent || navigator.vendor || (window as any).opera;
    const isMobile = /android|webos|iphone|ipod|blackberry|iemobile|opera mini/i.test(userAgent.toLowerCase());
    const isTablet = /tablet|ipad|playbook|silk/i.test(userAgent.toLowerCase()) && !isMobile;

    if (isMobile) {
      setDeviceType('mobile');
    } else if (isTablet) {
      setDeviceType('tablet');
    } else {
      setDeviceType('desktop');
    }
  }, []);

  return deviceType;
};

export default useDeviceDetect;