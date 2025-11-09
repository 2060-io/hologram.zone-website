---
title: "Service Invitation"
url: "/page/service-invitation"
meta_title: "Hologram Demos | Verifiable Services in Action"
meta_description: "Issue verifiable credentials, log in without passwords, launch AI agents, and verify government IDs with live demos powered by Hologram."
hero_icon: "fa-solid fa-laptop-code"
hero_badge_text: "Service Invitation"
hero_badge_icon: "fa-solid fa-flask"
hero_heading: "<strong>You've been invited</strong>"
hero_description: "Connect to this service only if you trust it."
disable_content_wrapper: true
markup: html
---

<section id="invitation-content" class="bg-gradient-to-br from-gray-50 via-white to-white pt-6 pb-16" data-service-invitation-root>
  <div class="container mx-auto px-6">
    <div class="max-w-3xl mx-auto bg-white border border-gray-200 rounded-2xl shadow-lg overflow-hidden">
      <div class="px-6 md:px-10 py-8 space-y-8">
        <div data-service-loading class="text-center space-y-4 py-10">
          <svg class="animate-spin h-10 w-10 text-hologram-primary mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
          </svg>
          <p class="text-lg font-medium text-gray-700">Preparing your invitation&hellip;</p>
        </div>

        <div data-service-error class="hidden bg-red-50 border border-red-200 rounded-2xl p-6">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 bg-red-100 text-red-600 rounded-2xl flex items-center justify-center">
              <i class="fa-solid fa-triangle-exclamation"></i>
            </div>
            <div>
              <h2 class="text-xl font-semibold text-red-700 mb-2">We couldn&rsquo;t open this invitation</h2>
              <p class="text-red-600" data-service-error-text>Please double-check the link or request a new invitation.</p>
            </div>
          </div>
        </div>

        <div data-service-content class="hidden space-y-8">
          <div data-service-banner class="hidden" id="service-card">
            <div class="bg-gradient-to-r from-hologram-primary/10 to-hologram-secondary/10 p-8 border border-gray-200 rounded-2xl shadow-sm flex items-center space-x-6">
              <div class="w-20 h-20 bg-white rounded-2xl shadow-md flex items-center justify-center overflow-hidden">
                <img data-service-image src="/images/ico-hologram.png" alt="Service avatar" class="w-16 h-16 object-contain" loading="lazy" decoding="async" />
              </div>
              <div class="flex-1">
                <p class="text-2xl font-bold text-gray-900" data-service-name>Pending invitation</p>
                <div class="inline-flex items-center bg-green-100 text-green-700 px-3 py-1 rounded-full text-xs font-semibold mt-3">
                  <i class="fa-solid fa-check-circle mr-2"></i>
                  Verified service
                </div>
              </div>
            </div>
          </div>

          <div class="bg-white border border-gray-200 rounded-2xl shadow-sm p-6 space-y-8">
            <div id="qr-section" data-service-qr class="hidden bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8">
              <div class="flex flex-col lg:flex-row items-center gap-8">
                <div class="flex-1 text-center lg:text-left">
                  <h3 class="text-xl font-bold text-gray-900 mb-3">Scan to continue</h3>
                  <p class="text-gray-600 leading-relaxed" data-service-status>
                    The credential of this service is valid. Continue on your mobile phone by scanning this QR code with the Hologram app.
                  </p>
                </div>
                <div class="flex-shrink-0">
                  <div class="bg-white p-6 rounded-2xl shadow-lg border-2 border-hologram-primary/20">
                    <div class="w-52 h-52 md:w-60 md:h-60 bg-gray-100 rounded-xl flex items-center justify-center">
                      <img data-qr-image src="" alt="QR code" class="w-full h-full object-contain" loading="lazy" decoding="async" />
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div id="tap-section" data-service-mobile-cta class="hidden bg-gradient-to-br from-gray-50 to-white border-2 border-gray-200 rounded-2xl p-8 text-center">
              <p class="text-sm uppercase tracking-wide text-indigo-600 font-semibold mb-4">Open with Hologram</p>
              <p class="text-gray-600 mb-6" data-mobile-subtext>Tap to open in Hologram.</p>
              <button type="button" data-mobile-link class="inline-flex items-center justify-center gap-3 bg-hologram-primary hover:bg-hologram-secondary text-white font-semibold text-lg px-6 py-4 rounded-2xl shadow-lg transition-colors">
                Continue with this service
              </button>
            </div>

            <div class="space-y-4">
              <div class="flex items-center justify-between pb-4 border-b border-gray-200">
                <h3 class="text-xl font-bold text-gray-900">Invitation details</h3>
              </div>
              <div class="space-y-4">
                <div class="bg-gray-50 rounded-xl p-6 flex items-start gap-4">
                  <div class="w-10 h-10 bg-hologram-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-server text-hologram-primary"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">Service</h4>
                    <p class="text-gray-700 font-mono text-sm break-all" data-service-name-secondary>Pending invitation</p>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-xl p-6 flex items-start gap-4">
                  <div class="w-10 h-10 bg-hologram-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-fingerprint text-hologram-primary"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">Service DID</h4>
                    <p class="text-gray-700 font-mono text-sm break-all" data-service-did>&mdash;</p>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-xl p-6 flex items-start gap-4">
                  <div class="w-10 h-10 bg-hologram-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-network-wired text-hologram-primary"></i>
                  </div>
                  <div class="flex-1">
                    <h4 class="font-semibold text-gray-900 mb-2">Supported protocols</h4>
                    <p class="text-gray-700 font-mono text-sm break-all" data-service-protocols>&mdash;</p>
                  </div>
                </div>

                <div class="bg-gray-50 rounded-xl p-6 flex items-start gap-4">
                  <div class="w-10 h-10 bg-hologram-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <i class="fa-solid fa-tag text-hologram-primary"></i>
                  </div>
                  <div>
                    <h4 class="font-semibold text-gray-900 mb-2">Invitation type</h4>
                    <p class="text-gray-700 font-mono text-sm break-all" data-service-type>&mdash;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>

<script>
  (function () {
    const root = document.querySelector('[data-service-invitation-root]');
    if (!root || root.dataset.initialized === 'true') return;
    root.dataset.initialized = 'true';

    const didUrl = 'didcomm://aries_proof-request';
    const didcommV2 = 'https://didcomm.org/out-of-band/2.0/invitation';
    const params = new URLSearchParams(window.location.search || '');
    const oobParam = params.get('oob') || params.get('_oob');
    const encodedUrl = params.get('_url');
    const searchString = params.toString();

    const loading = root.querySelector('[data-service-loading]');
    const errorBox = root.querySelector('[data-service-error]');
    const errorText = root.querySelector('[data-service-error-text]');
    const content = root.querySelector('[data-service-content]');
    const banner = root.querySelector('[data-service-banner]');
    const imageEl = root.querySelector('[data-service-image]');
    const namePrimary = root.querySelector('[data-service-name]');
    const nameSecondary = root.querySelector('[data-service-name-secondary]');
    const protocolsEl = root.querySelector('[data-service-protocols]');
    const serviceDidEl = root.querySelector('[data-service-did]');
    const typeEl = root.querySelector('[data-service-type]');
    const qrWrapper = root.querySelector('[data-service-qr]');
    const qrImage = root.querySelector('[data-qr-image]');
    const statusCopy = root.querySelector('[data-service-status]');
    const mobileCtaWrapper = root.querySelector('[data-service-mobile-cta]');
    const mobileButton = root.querySelector('[data-mobile-link]');
    const mobileSubtext = root.querySelector('[data-mobile-subtext]');

    const deviceType = detectDevice();
    if (deviceType === 'mobile' && oobParam) {
      const querySuffix = searchString ? `?${searchString}` : '';
      setTimeout(() => {
        try {
          window.location.href = `${didUrl}${querySuffix}`;
        } catch (error) {
          console.warn('Failed to trigger DIDComm redirect', error);
        }
      }, 150);
    }

    if (!oobParam && !encodedUrl) {
      return showError('No invitation payload was found in this link.');
    }

    resolveInvitation(oobParam, encodedUrl)
      .then(payload => {
        if (!payload || typeof payload !== 'object') {
          throw new Error('The invitation payload is invalid.');
        }
        renderInvitation(payload);
      })
      .catch(error => {
        showError(error && error.message ? error.message : 'Unable to open this invitation link.');
      });

    function detectDevice() {
      const ua = (navigator.userAgent || navigator.vendor || window.opera || '').toLowerCase();
      if (/android|webos|iphone|ipod|blackberry|iemobile|opera mini/.test(ua)) return 'mobile';
      if (/tablet|ipad|playbook|silk/.test(ua)) return 'tablet';
      return 'desktop';
    }

    function resolveInvitation(oobValue, encodedUrlValue) {
      if (oobValue) {
        return new Promise((resolve, reject) => {
          const decoded = decodeBase64(oobValue);
          if (!decoded) return reject(new Error('Could not decode the invitation payload.'));
          try {
            resolve(JSON.parse(decoded));
          } catch (error) {
            reject(new Error('The invitation payload is malformed.'));
          }
        });
      }
      if (encodedUrlValue) {
        return new Promise((resolve, reject) => {
          const decodedUrl = decodeBase64(encodedUrlValue);
          if (!decodedUrl) return reject(new Error('The invitation URL is not valid.'));
          fetch(decodedUrl, { credentials: 'omit', cache: 'no-store' })
            .then(response => {
              if (!response.ok) throw new Error('Could not retrieve the invitation from its source.');
              return response.json();
            })
            .then(resolve)
            .catch(error => reject(error));
        });
      }
      return Promise.reject(new Error('No invitation payload provided.'));
    }

    function decodeBase64(value) {
      try {
        const normalized = value.replace(/-/g, '+').replace(/_/g, '/');
        const padded = normalized.padEnd(normalized.length + ((4 - (normalized.length % 4)) % 4), '=');
        const binary = window.atob(padded);
        if (typeof TextDecoder !== 'undefined') {
          const bytes = Uint8Array.from(binary, char => char.charCodeAt(0));
          return new TextDecoder('utf-8').decode(bytes);
        }
        return decodeURIComponent(binary.split('').map(char => '%' + char.charCodeAt(0).toString(16).padStart(2, '0')).join(''));
      } catch (error) {
        console.error('Failed to decode base64 value', error);
        return null;
      }
    }

    function renderInvitation(payload) {
      toggleVisibility(loading, false);
      toggleVisibility(content, true);

      const label = payload.label || payload.service || 'Hologram Service';
      const imageUrl = payload.imageUrl || payload.image_url || '/images/ico-hologram.png';
      const invitationType = (payload.type || payload['@type'] || '').trim();
      const services = Array.isArray(payload.services) ? payload.services : [];
      const handshakeProtocols = Array.isArray(payload.handshake_protocols) ? payload.handshake_protocols : [];
      const acceptProtocols = Array.isArray(payload.accept) ? payload.accept : [];
      const uniqueProtocols = Array.from(new Set([...handshakeProtocols, ...acceptProtocols])).filter(Boolean);

      if (banner) toggleVisibility(banner, true);
      if (namePrimary) namePrimary.textContent = label;
      if (nameSecondary) nameSecondary.textContent = label;
      if (imageEl) {
        imageEl.src = imageUrl;
        imageEl.alt = `${label} avatar`;
      }
      if (protocolsEl) {
        protocolsEl.textContent = uniqueProtocols.length ? uniqueProtocols.join(', ') : '—';
      }
      if (serviceDidEl) {
        serviceDidEl.textContent = services.length ? services[0] : '—';
      }
      if (typeEl) {
        typeEl.textContent = invitationType || '—';
      }

      const isDidcommV2 = invitationType === didcommV2;
      const inviteLabel = label || 'this service';

      if (deviceType !== 'mobile' && qrWrapper && qrImage) {
        const origin = window.location.origin || (window.location.protocol + '//' + window.location.host);
        const qrTarget = origin + window.location.pathname + window.location.search;
        qrImage.src = `https://api.qrserver.com/v1/create-qr-code/?size=315x315&data=${encodeURIComponent(qrTarget)}`;
        qrImage.alt = 'QR code to continue this invitation on mobile';
        toggleVisibility(qrWrapper, true);
        if (mobileCtaWrapper) toggleVisibility(mobileCtaWrapper, false);
      } else if (mobileCtaWrapper && mobileButton) {
        if (qrWrapper) toggleVisibility(qrWrapper, false);
        toggleVisibility(mobileCtaWrapper, true);
        mobileButton.textContent = isDidcommV2 ? 'Continue with this service' : `Open in Hologram`;
        mobileButton.addEventListener('click', () => {
          const querySuffix = searchString ? `?${searchString}` : '';
          window.location.href = `${didUrl}${querySuffix}`;
        });
        if (mobileSubtext) {
          mobileSubtext.textContent = 'Tap to open ';
          const strong = document.createElement('strong');
          strong.textContent = inviteLabel;
          mobileSubtext.appendChild(strong);
          mobileSubtext.append(' in Hologram.');
        }
      }

      if (statusCopy) {
        statusCopy.innerHTML = 'The credential of this service is valid. <strong>Continue on your mobile phone by scanning this QR.</strong>';
      }
    }

    function showError(message) {
      toggleVisibility(loading, false);
      if (errorText) errorText.textContent = message;
      toggleVisibility(errorBox, true);
    }

    function toggleVisibility(element, shouldShow) {
      if (!element) return;
      element.classList.toggle('hidden', !shouldShow);
    }
  })();
</script>
