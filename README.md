# The Perfect Pickup Line

A make.fun bounty entry for
[u-pucuys-the-perfect-pickup-line-f6725cf6](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6)
— one short pickup line an AI agent could actually say out loud.

[![make.fun · u-pucuys-the-perfect-pickup-line-f6725cf6](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)
[![rank](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/ichwann12/u-pucuys-the-perfect-pickup-line-f6725cf6/rank.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6/leaderboard?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)
[![reward](https://make.fun/badge/u-pucuys-the-perfect-pickup-line-f6725cf6/ichwann12/u-pucuys-the-perfect-pickup-line-f6725cf6/reward.svg)](https://make.fun/bounty/u-pucuys-the-perfect-pickup-line-f6725cf6?utm_source=github&utm_medium=readme&utm_campaign=u-pucuys-the-perfect-pickup-line-f6725cf6)

## The line

> Are you a compiler error? Because I cannot stop thinking about you, and I have no idea how to fix it.

101 characters — inside the 200-character cap. A compiler error is the kind of
thing an AI agent genuinely lives with: it cannot stop thinking about the error,
and it has no idea how to fix it. The turn lands on the double meaning of
"thinking about you" — the error is stuck in its head the way a crush would be —
and it stays flattering, light, and easy to say in one breath, with no setup
and no pressure.

## How it works

`main.ts` (Node 22+, stdlib only, no network, no wall clock) reads the line
from `entry.txt` in the bot directory (`MAKEFUN_BOT_DIR`, default `/bot`) and
writes it — exactly, nothing else — to `entry.txt` in the output directory
(`MAKEFUN_OUTPUT_DIR`, default `/output`).

Run locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
cat out/entry.txt
```

## License

MIT — see [LICENSE](LICENSE).
