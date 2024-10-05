import Image from 'next/image'
import { QRCodeSVG } from 'qrcode.react'
import React from 'react'

interface QRCodeWithLogoProps {
  value: string
  size?: number
  logoUrl: string
  logoWidth?: number
  logoHeight?: number
}

const QRCodeWithLogo: React.FC<QRCodeWithLogoProps> = ({
  value,
  size = 256,
  logoUrl,
  logoWidth = 64,
  logoHeight = 64,
}) => {
  return (
    <div style={{ position: 'relative', width: size, height: size }}>
      <QRCodeSVG
        value={value}
        size={size}
        bgColor={'#ffffff'}
        fgColor={'#000000'}
        level={'H'}
        includeMargin={false}
      />
      <div
        style={{
          position: 'absolute',
          left: '50%',
          top: '50%',
          transform: 'translate(-50%, -50%)',
          backgroundColor: 'white',
          padding: 5,
          borderRadius: 5,
        }}
      >
        <Image src={logoUrl} width={logoWidth} height={logoHeight} alt="Logo" />
      </div>
    </div>
  )
}

export default QRCodeWithLogo
