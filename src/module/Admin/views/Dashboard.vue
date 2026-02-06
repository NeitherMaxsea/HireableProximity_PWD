<template>
  <div class="dashboard">

    <!-- Page Title -->
    <div class="header">
      <h2>Admin Dashboard</h2>
      <p>System Overview</p>
    </div>

    <!-- Stats Cards -->
    <div class="stats">

      <div class="card">
        <h3>Total Applicants</h3>
        <p class="number">120</p>
      </div>

      <div class="card">
        <h3>Total Employers</h3>
        <p class="number">35</p>
      </div>

      <div class="card">
        <h3>Active Jobs</h3>
        <p class="number">78</p>
      </div>

      <div class="card">
        <h3>Total Applications</h3>
        <p class="number">560</p>
      </div>

    </div>

    <!-- Content Grid -->
    <div class="grid">

      <!-- Recent Applications -->
      <div class="panel">
        <h3>Recent Applications</h3>

        <table>
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Job</th>
              <th>Status</th>
            </tr>
          </thead>

          <tbody>
            <tr>
              <td>Juan Dela Cruz</td>
              <td>Data Encoder</td>
              <td class="pending">Pending</td>
            </tr>

            <tr>
              <td>Maria Santos</td>
              <td>Office Clerk</td>
              <td class="approved">Approved</td>
            </tr>

            <tr>
              <td>Pedro Reyes</td>
              <td>Web Assistant</td>
              <td class="rejected">Rejected</td>
            </tr>
          </tbody>
        </table>
      </div>

      <!-- System Activity -->
      <div class="panel">
        <h3>System Activity</h3>

        <ul class="activity">
          <li>New employer registered</li>
          <li>Job posting approved</li>
          <li>New applicant created account</li>
          <li>Application status updated</li>
        </ul>

      </div>

    </div>

  </div>
</template>

<script setup>
// later you can fetch real data here
</script>

<style scoped>

.dashboard {
  padding: 10px;
}

/* Header */

.header h2 {
  margin: 0;
}

.header p {
  color: gray;
  margin-bottom: 20px;
}

/* Stats */

.stats {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(220px, 1fr));
  gap: 20px;
  margin-bottom: 30px;
}

.card {
  background: white;
  padding: 20px;
  border-radius: 10px;
  box-shadow: 0 0 5px rgba(0,0,0,0.05);
}

.card h3 {
  margin: 0;
  font-size: 15px;
  color: gray;
}

.number {
  font-size: 32px;
  font-weight: bold;
  margin-top: 10px;
}

/* Grid */

.grid {
  display: grid;
  grid-template-columns: 2fr 1fr;
  gap: 20px;
}

/* Panel */

.panel {
  background: white;
  padding: 20px;
  border-radius: 10px;
}

.panel h3 {
  margin-bottom: 15px;
}

/* Table */

table {
  width: 100%;
  border-collapse: collapse;
}

th, td {
  padding: 10px;
  border-bottom: 1px solid #eee;
  text-align: left;
}

.pending { color: orange; }
.approved { color: green; }
.rejected { color: red; }

/* Activity */

.activity {
  list-style: none;
  padding: 0;
}

.activity li {
  padding: 10px 0;
  border-bottom: 1px solid #eee;
}

</style>
