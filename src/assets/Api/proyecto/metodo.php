<?php
    require_once "../connection/connection.php";

    class proyectos {

        public static function getAll() {
            $db = new Connection();
            $query = "SELECT *FROM proyecto";
            $resultado = $db->query($query);
            $datos = [];
            if($resultado->num_rows) {
                while($row = $resultado->fetch_assoc()) {
                    $datos[] = [
                        'id' => $row['id'],
                        'descripcion' => $row['descripcion'],
                        'nombre_proyecto' => $row['nombre_proyecto'],
                        'persona_id' => $row['persona_id'],
                        'url_imagen' => $row['url_imagen'],
                        'url_proyecto' => $row['url_proyecto']
                        
                    ];
                }//end while
                return $datos;
            }//end if
            return $datos;
        }//end getAll

        public static function getWhere($id_proyecto) {
            $db = new Connection();
            $query = "SELECT *FROM proyecto WHERE id=$id_proyecto";
            $resultado = $db->query($query);
            $datos = [];
            if($resultado->num_rows) {
                while($row = $resultado->fetch_assoc()) {
                    $datos[] = [
                        'id' => $row['id'],
                        'descripcion' => $row['descripcion'],
                        'nombre_proyecto' => $row['nombre_proyecto'],
                        'persona_id' => $row['persona_id'],
                        'url_imagen' => $row['url_imagen'],
                        'url_proyecto' => $row['url_proyecto']
                        
                    ];
                }//end while
                return $datos;
            }//end if
            return $datos;
        }//end getWhere

        public static function insert($descripcion, $nombre_proyecto,$persona_id, $url_imagen,$url_proyecto) {
            $db = new Connection();
            $query = "INSERT INTO proyecto (descripcion, nombre_proyecto,persona_id,url_imagen,url_proyecto)
            VALUES('".$descripcion."', '".$nombre_proyecto."', '".$persona_id."', '".$url_imagen."', '".$url_proyecto."')";
            $db->query($query);
            if($db->affected_rows) {
                return TRUE;
            }//end if
            return FALSE;
        }//end insert

        public static function update($id_proyecto, $descripcion,$nombre_proyecto,$persona_id,$url_imagen, $url_proyecto) {
            $db = new Connection();
            $query = "UPDATE proyecto SET
            descripcion='".$descripcion."', nombre_proyecto='".$nombre_proyecto."', persona_id='".$persona_id."' , url_imagen='".$url_imagen."' , url_proyecto='".$url_proyecto."'
            WHERE id=$id_proyecto";
            $db->query($query);
            if($db->affected_rows) {
                return TRUE;
            }//end if
            return FALSE;
        }//end update

        public static function delete($id_proyecto) {
            $db = new Connection();
            $query = "DELETE FROM proyecto WHERE id=$id_proyecto";
            $db->query($query);
            if($db->affected_rows) {
                return TRUE;
            }//end if
            return FALSE;
        }//end delete

    }//end class Cliente
