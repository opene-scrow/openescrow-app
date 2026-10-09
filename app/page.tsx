import { networkSummary } from "../lib/stellar";
export default function Home(){return <main><p className="tag">STELLAR / SOROBAN</p><h1>OpenEscrow</h1><p>Milestone escrow for services and deliverables.</p><section className="card"><h2>Network</h2><p>{networkSummary()}</p></section></main>}
