<template>
  <div class="app">

    <!-- SIDEBAR -->
    <SidebarEmployer />

    <!-- MAIN AREA -->
    <div class="main-wrapper">

      <!-- NAVBAR -->
      <NavbarEmployer />

      <!-- MAIN -->
      <main>

        <section class="content">

          <h2>Applicants List</h2>

          <div class="card">
            <table>
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Position</th>
                  <th>Email</th>
                  <th>Status</th>
                  <th width="240">Actions</th>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>Juan Dela Cruz</td>
                  <td>Web Developer</td>
                  <td>juan@email.com</td>
                  <td><span class="tag new">New</span></td>
                  <td class="actions-cell">
                    <div class="action-group">
                      <button class="btn view">View</button>
                      <button class="btn shortlist">Shortlist</button>
                      <button class="btn reject">Reject</button>
                    </div>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

        </section>
      </main>

    </div>

  </div>
</template>

<script>
import SidebarEmployer from '@/components/sb-employer.vue'
import NavbarEmployer from '@/components/nv-employer.vue'

export default {

  name: "Applicants",

  components:{
    SidebarEmployer,
    NavbarEmployer
  },

  data() {
    return {
      applicants: [
        {
          name: "Juan Dela Cruz",
          position: "Web Developer",
          email: "juan@email.com",
          status: "New"
        }
      ]
    }
  }

}
</script>

<style scoped>

/* LAYOUT */
.app{
  display:flex;
  min-height:100vh;
  background:#f5f7fb;
}

.main-wrapper{
  flex:1;
  display:flex;
  flex-direction:column;
}

/* MAIN */
main{
  flex:1;
  overflow:hidden;
}

/* CONTENT */
.content{
  height:100%;
  padding:25px;
  overflow-y:auto;
}

.content h2{
  margin-bottom:20px;
}

/* CARD */
.card{
  background:white;
  padding:20px;
  border-radius:12px;
  box-shadow:0 2px 6px rgba(0,0,0,0.04);
}

/* TABLE */
table{
  width:100%;
  border-collapse:collapse;
}

th, td{
  padding:10px;
  border-bottom:1px solid #e5e7eb;
}

/* TAG */
.tag{
  padding:4px 10px;
  border-radius:20px;
  font-size:12px;
}

.new{ background:#bfdbfe; }

/* ACTIONS */
.actions-cell{
  vertical-align: middle;
}

.action-group{
  display:flex;
  flex-direction:column;
  gap:8px;
  align-items:flex-start;
}

/* BUTTONS */
.btn{
  background:transparent;
  border:1.5px solid;
  padding:6px 14px;
  border-radius:6px;
  font-size:13px;
  cursor:pointer;
}

/* VIEW */
.btn.view{
  color:#2563eb;
  border-color:#2563eb;
}
.btn.view:hover{
  background:#2563eb;
  color:white;
}

/* SHORTLIST */
.btn.shortlist{
  color:#16a34a;
  border-color:#16a34a;
}
.btn.shortlist:hover{
  background:#16a34a;
  color:white;
}

/* REJECT */
.btn.reject{
  color:#ef4444;
  border-color:#ef4444;
}
.btn.reject:hover{
  background:#ef4444;
  color:white;
}

</style>
