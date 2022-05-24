<?php
    require_once "../connection/connection.php";

    class habilidades {

        public static function getAll() {
            $db = new Connection();
            $query = "SELECT *FROM habilidades";
            $resultado = $db->query($query);
            $datos = [];
            if($resultado->num_rows) {
                while($row = $resultado->fetch_assoc()) {
                    $datos[] = [
                        'id' => $row['id'],
                        'habilidad' => $row['habilidad'],
                        'url_habilidad' => $row['url_habilidad'],
                        'persona_id' => $row['persona_id']
                       
                        
                        
                    ];
                }//end while
                return $datos;
            }//end if
            return $datos;
        }//end getAll

        public static function getWhere($id_habilidad) {
            $db = new Connection();
            $query = "SELECT *FROM habilidades WHERE id=$id_habilidad";
            $resultado = $db->query($query);
            $datos = [];
            if($resultado->num_rows) {
                while($row = $resultado->fetch_assoc()) {
                    $datos[] = [
                        'id' => $row['id'],
                        'habilidad' => $row['habilidad'],
                        'url_habilidad' => $row['url_habilidad'],
                        'persona_id' => $row['persona_id']
                        
                        
                        
                    ];
                }//end while
                return $datos;
            }//end if
            return $datos;
        }//end getWhere

        public static function insert($habilidad, $url_habilidad,$persona_id) {
            $db = new Connection();
            $query = "INSERT INTO habilidades (habilidad, url_habilidad,persona_id)
            VALUES('".$habilidad."', '".$url_habilidad."', '".$persona_id."')";
            $db->query($query);
            if($db->affected_rows) {
                return TRUE;
            }//end if
            return FALSE;
        }//end insert

        public static function update($id_habilidad, $habilidad,$url_habilidad,$persona_id) {
            $db = new Connection();
            $query = "UPDATE habilidades SET
            habilidad='".$habilidad."', url_habilidad='".$url_habilidad."', persona_id='".$persona_id."' 
            WHERE id=$id_habilidad";
            $db->query($query);
            if($db->affected_rows) {
                return TRUE;
            }//end if
            return FALSE;
        }//end update

        public static function delete($id_habilidad) {
            $db = new Connection();
            $query = "DELETE FROM habilidades WHERE id=$id_habilidad";
            $db->query($query);
            if($db->affected_rows) {
                return TRUE;
            }//end if
            return FALSE;
        }//end delete

    }//end class Cliente
