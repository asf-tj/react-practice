import { useState } from 'react'
import MilestoneCard from './components/MilestoneCard.jsx'

// Our fake data. Each milestone has an id, a title, and whether it's approved.
const startingMilestones = [
  { id: 1, title: 'Keywords', approved: false },
  { id: 2, title: 'Character Brief', approved: false },
  { id: 3, title: 'Story Outline', approved: false },
]

function App() {
  // "State" is data that can change. When it changes, React redraws the page.
  // milestones = the current list, setMilestones = the function to change it.
  const [milestones, setMilestones] = useState(startingMilestones)

  // Count how many are approved. This is recalculated on every redraw,
  // so the counter always matches the cards.
  const approvedCount = milestones.filter((m) => m.approved).length

  // Mark one milestone as approved by making a new list with that one changed.
  function approve(id) {
    setMilestones(
      milestones.map((m) => (m.id === id ? { ...m, approved: true } : m))
    )
  }

  return (
    <main>
      <h1>Milestone Tracker</h1>
      <p className="counter">
        {approvedCount} of {milestones.length} approved
      </p>

      <div className="card-list">
        {milestones.map((m) => (
          <MilestoneCard
            key={m.id}
            title={m.title}
            approved={m.approved}
            onApprove={() => approve(m.id)}
          />
        ))}
      </div>
    </main>
  )
}

export default App
