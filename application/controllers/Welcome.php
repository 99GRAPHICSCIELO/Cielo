<?php
defined('BASEPATH') OR exit('No direct script access allowed');

class Welcome extends CI_Controller {
	public function __construct(){
		parent::__construct();
		$this->load->model('Welcome_Model');
	}

	public function index()
	{
		$title = "Welcome";
		$this->load->view('include/header.php', compact('title'));
		$this->load->view('welcome_message');
		$this->load->view('include/footer.php');
	}
	public function storeData(){

		$this->form_validation->set_rules('name', 'Name', 'trim|required');
		$this->form_validation->set_rules('email', 'Email', 'trim|required|valid_email|is_unique[registartion.email]');
		$this->form_validation->set_rules('dob', 'DOB', 'required|trim');
		
		if ($this->form_validation->run() == FALSE)
		{
			$errors = $this->form_validation->error_array();
			echo json_encode($errors);
		}
		else
		{
			return $this->Welcome_Model->storeRecord("registartion",$_POST);
		}
			
	}



	
}
