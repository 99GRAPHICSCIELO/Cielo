<section class="simpleForm">
  <div class="container-fluid">
    <div class="row">
      <div class="col-md-6">
        <div class="card">
          <h2 class="card-title text-center mb-0">Cl Application</h2>
          <div class="card-body py-md-4">
            <div class="notice"></div>
            <form id="basic-form" method="post">
              <div class="form-group">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" required>
              </div>
              <div class="form-group">
                <label for="dob">Date of Birth</label>
                <input type="date" class="form-control" id="dob" name="dob" required>
              </div>
              <div class="form-group">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email" required>
              </div>
              <div class="form-group">
                <label for="color">Favorite Color</label>
                <input type="color" class="form-control favColor" id="color" name="color">
              </div>
              <div class="d-flex flex-row align-items-center justify-content-between">
                <button class="btn btn-primary submitbtn" type="submit">Submit</button>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="col-md-6">
        <table class="table table-bordered table-hover">
          <thead class="thead-dark">
            <tr>
              <th scope="col">S.No.</th>
              <th scope="col">Name</th>
              <th scope="col">Email</th>
              <th scope="col">Date of Birth</th>
              <th scope="col">Color</th>
              <th scope="col">Action</th>
            </tr>
          </thead>
          <tbody class="dynamic-data">
          <td colspan="6" class="text-center"><div class="lds-ring"><div></div><div></div><div></div><div></div></div></td>
          </tbody>
        </table>
   
      </div>
    </div>
  </div>
</section>
<div class="modal fade" id="exampleModalCenter" tabindex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
  <div class="modal-dialog modal-dialog-centered" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLongTitle">Cl Application</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
         <div class="Editnotice"></div>
        <form id="Edit-basic-form" method="post">
          <div class="form-group">
            <label for="name">Name</label>
            <input type="text" class="form-control editName" id="name" name="name" required>
          </div>
          <div class="form-group">
            <label for="dob">Date of Birth</label>
            <input type="date" class="form-control editDob" id="dob" name="dob" required>
          </div>
          <div class="form-group">
            <label for="email">Email</label>
            <input type="email" class="form-control editEmail" id="email" name="email" required>
          </div>
          <div class="form-group">
            <label for="color">Favorite Color</label>
            <input type="color" class="form-control favColor editColor" id="color" name="color">
            <input type="hidden" class="EditKey" >
          </div>
          <div class="d-flex flex-row align-items-center justify-content-between">
             <button type="button" class="btn btn-danger" data-dismiss="modal">Close</button>
             <button type="submit" class="btn btn-primary">Update</button>
          </div>
        </form>
      </div>

    </div>
  </div>
</div>