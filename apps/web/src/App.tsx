import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';

function Home() {
  return (
    <div className="p-8">
      <h1 className="text-3xl font-bold">hangout-app</h1>
      <p className="mt-4 text-gray-600">scaffold works</p>
      <Link to="/new" className="mt-4 inline-block text-blue-600 underline">
        create a poll
      </Link>
    </div>
  );
}

function NewPoll() {
  return <div className="p-8">new poll page (todo)</div>;
}

function PollResponse() {
  return <div className="p-8">poll response page (todo)</div>;
}

function Dashboard() {
  return <div className="p-8">dashboard (todo)</div>;
}

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<NewPoll />} />
        <Route path="/poll/:id" element={<PollResponse />} />
        <Route path="/dashboard/:id" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}
