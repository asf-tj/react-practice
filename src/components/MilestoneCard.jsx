// A reusable card that shows ONE milestone.
// It receives its data as "props" (inputs) from the parent component (App).
//   title      - the milestone name, e.g. "Keywords"
//   approved   - true or false
//   onApprove  - a function to call when the Approve button is clicked
function MilestoneCard({ title, approved, onApprove }) {
  return (
    <div className="card">
      <h2>{title}</h2>

      <p className={approved ? 'status approved' : 'status waiting'}>
        {approved ? 'Approved' : 'Waiting'}
      </p>

      <button onClick={onApprove} disabled={approved}>
        {approved ? 'Done' : 'Approve'}
      </button>
    </div>
  )
}

export default MilestoneCard
