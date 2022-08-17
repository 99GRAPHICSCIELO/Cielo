<?php
class Welcome_Model extends CI_Model 
{
	function storeRecord($tbl, $data)
	{
		return $this->db->insert($tbl, $data);
	}
}
?>