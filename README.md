# IPFS-Signal

## Goals

Bridge web2 to web3

- Push code to IPFS
  - Keep track of last few version

- Serve content over HTTP
  - Find owner based on domain
  - Find location on IPFS node
  - Send `x-ipfs-path`: record to user
  - Serve content

- Update DNS records to DNSLink ([https://dnslink.io/](https://dnslink.io/))

###
sigctl login
sigctl logout

sigctl deploy
sigctl init/new

sigctl domain luc.computer ls

            Version Updated
Current ->  169     5 min ago
            168     10 min ago
            167     3 hours ago
            166     2 weeks ago

sigctl domain luc.computer rollback 166
s d luc.computer rb 166