---
title: "Service Invitation"
url: "/page/service-invitation"
meta_title: "Hologram Demos | Verifiable Services in Action"
meta_description: "Issue verifiable credentials, log in without passwords, launch AI agents, and verify government IDs with live demos powered by Hologram."
hero_icon: "fa-solid fa-laptop-code"
hero_badge_text: "Service Invitation"
hero_badge_icon: "fa-solid fa-flask"
hero_heading: "<strong>You've been invited</strong>"
hero_description: "Connect only to this service if you trust it."
disable_content_wrapper: true
markup: html
---

<section class="bg-white dark:bg-gray-900 text-gray-900 dark:text-gray-100 py-12" data-service-invitation-root>
  <div class="container mx-auto px-6 lg:px-12 space-y-10">
    <div data-service-loading class="text-center space-y-4">
      <svg class="animate-spin h-10 w-10 text-hologram-primary mx-auto" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
        <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
        <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8v8H4z"></path>
      </svg>
      <p class="text-lg font-medium">Preparing your invitation&hellip;</p>
    </div>

    <div data-service-error class="hidden bg-red-50 dark:bg-red-900/40 border border-red-200 dark:border-red-800 rounded-2xl p-6">
      <h2 class="text-xl font-semibold text-red-700 dark:text-red-300 mb-2">We couldn&rsquo;t open this invitation</h2>
      <p class="text-red-600 dark:text-red-200" data-service-error-text>Please double-check the link or request a new invitation.</p>
    </div>

    <div data-service-content class="hidden space-y-10">
      <div data-service-banner class="hidden text-center space-y-6">
        <p class="text-lg text-gray-600 dark:text-gray-300">You have been invited to connect to:</p>
        <div class="flex flex-col sm:flex-row items-center justify-center gap-5 bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-2xl px-6 py-5 shadow-sm">
          <div class="w-20 h-20 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 flex items-center justify-center overflow-hidden">
            <img data-service-image src="/images/ico-hologram.png" alt="Service avatar" class="w-full h-full object-contain" loading="lazy" decoding="async" />
          </div>
          <div class="text-left space-y-1">
            <p class="text-2xl font-semibold" data-service-name>Pending invitation</p>
            <p class="text-sm text-gray-500 dark:text-gray-400">Open this invitation in the Hologram app to continue.</p>
          </div>
        </div>
      </div>

      <div class="grid gap-10 lg:grid-cols-2 items-start">
        <div data-service-qr class="hidden space-y-4 text-center">
          <div class="mx-auto w-[280px] md:w-[315px] aspect-square flex items-center justify-center bg-white dark:bg-gray-800 border-2 border-dashed border-gray-200 dark:border-gray-700 rounded-3xl shadow-lg p-4">
            <img data-qr-image src="" alt="QR code" class="w-full h-full object-contain" loading="lazy" decoding="async" />
          </div>
          <p class="flex flex-col sm:flex-row sm:items-center sm:justify-center gap-3 text-sm md:text-base text-gray-600 dark:text-gray-300">
            <span class="inline-flex items-center justify-center bg-white dark:bg-gray-800 rounded-full w-10 h-10 mx-auto sm:mx-0">
              <img src="/images/valid_credential.svg" alt="Valid credential" class="w-6 h-6" loading="lazy" decoding="async" />
            </span>
            <span data-service-status>The credential of this service is valid. Continue on your mobile phone by scanning this QR.</span>
          </p>
        </div>

        <div class="space-y-6">
          <div data-service-mobile-cta class="hidden text-center bg-indigo-50 dark:bg-indigo-900/30 border border-indigo-200 dark:border-indigo-700 rounded-2xl p-6">
            <p class="text-sm uppercase tracking-wide text-indigo-600 dark:text-indigo-300 mb-4 font-semibold">Open with Hologram</p>
            <button type="button" data-mobile-link class="inline-flex items-center justify-center gap-2 bg-indigo-500 hover:bg-indigo-600 text-white font-semibold text-base md:text-lg px-6 py-3 rounded-xl shadow-lg w-full transition-colors">
              Continue with this service
            </button>
            <p class="text-xs text-gray-600 dark:text-gray-300 mt-3" data-mobile-subtext>This will switch to the Hologram app if it&rsquo;s installed.</p>
          </div>

          <div class="bg-gray-50 dark:bg-white/5 border border-gray-200 dark:border-white/10 rounded-3xl p-6 space-y-6">
            <h3 class="text-lg font-semibold">Invitation details</h3>
            <dl class="space-y-4 text-sm">
              <div class="flex flex-col gap-1">
                <dt class="uppercase tracking-wide text-gray-500 dark:text-gray-400 text-xs">Service</dt>
                <dd class="text-base text-gray-900 dark:text-gray-50 font-medium" data-service-name-secondary>Pending invitation</dd>
              </div>
              <div class="flex flex-col gap-1">
                <dt class="uppercase tracking-wide text-gray-500 dark:text-gray-400 text-xs">Supported protocols</dt>
                <dd class="text-base text-gray-900 dark:text-gray-50 font-medium" data-service-protocols>&mdash;</dd>
              </div>
              <div class="flex flex-col gap-1">
                <dt class="uppercase tracking-wide text-gray-500 dark:text-gray-400 text-xs">Available services</dt>
                <dd class="text-base text-gray-900 dark:text-gray-50 font-medium" data-service-services>&mdash;</dd>
              </div>
              <div class="flex flex-col gap-1">
                <dt class="uppercase tracking-wide text-gray-500 dark:text-gray-400 text-xs">Invitation type</dt>
                <dd class="text-base text-gray-900 dark:text-gray-50 font-medium" data-service-type>&mdash;</dd>
              </div>
            </dl>
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
    const servicesEl = root.querySelector('[data-service-services]');
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
      if (servicesEl) {
        servicesEl.textContent = services.length ? services.join(', ') : '—';
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
      } else if (mobileCtaWrapper && mobileButton) {
        toggleVisibility(mobileCtaWrapper, true);
        mobileButton.textContent = isDidcommV2 ? 'Continue with this service' : `Get ${inviteLabel} in Hologram`;
        mobileButton.addEventListener('click', () => {
          const querySuffix = searchString ? `?${searchString}` : '';
          window.location.href = `${didUrl}${querySuffix}`;
        });
        if (mobileSubtext) {
          mobileSubtext.textContent = 'Tap continue to switch to the Hologram app.';
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
