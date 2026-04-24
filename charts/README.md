# hologram.zone website — Helm chart

Deploys the hologram.zone marketing website (Next.js 15 standalone) behind
an nginx ingress with Let's Encrypt TLS.

## Defaults

| Key | Value |
| --- | --- |
| `image.repository` | `io2060/hologram-website` |
| `image.tag` | empty → `v<Chart.AppVersion>` (e.g. `v0.1.0`) |
| `replicaCount` | `1` |
| `service.type` | `ClusterIP` |
| `service.port` | `80` |
| `service.targetPort` | `3000` (Next.js standalone listens on 3000) |
| `ingress.className` | `nginx` |
| `ingress.host` | `hologram.zone` |
| `ingress.tls.enabled` | `true` |
| `ingress.tls.secretName` | `hologram-website-hologram-zone-tls` |
| `ingress.annotations` | `cert-manager.io/cluster-issuer: letsencrypt-prod` |

## Install

```bash
helm upgrade --install hologram-website ./charts \
  --namespace web \
  --create-namespace \
  --set image.tag=v0.1.0   # or leave unset to default to v<AppVersion>, or use 'latest' / 'dev'
```

## CI

Deployment is triggered automatically by `.github/workflows/deploy.yml` on
every published GitHub release (the companion `.github/workflows/cd.yml`
builds the image). It authenticates against the OVH cluster using the
`OVH_KUBECONFIG` GitHub Actions **secret** (raw kubeconfig contents,
masked in logs).

Set it under *Settings → Secrets and variables → Actions → Secrets →
New repository secret*, name `OVH_KUBECONFIG`, value the full kubeconfig
YAML.

The Docker image push in `cd.yml` uses two additional secrets:

- `DOCKER_HUB_LOGIN` — Docker Hub username with push rights on `io2060/*`.
- `DOCKER_HUB_PWD` — Docker Hub access token.
