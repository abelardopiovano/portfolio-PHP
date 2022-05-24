<<<<<<< HEAD
<?php
    require_once "./metodo.php";

    switch ($_SERVER['REQUEST_METHOD']) {
        case 'GET':
            if(isset($_GET['id'])) {
                echo json_encode(experiencia::getWhere($_GET['id']));
            }//end if
            else {
                echo json_encode(experiencia::getAll());
            }//end else
            break;
        case 'POST':
            $datos = json_decode(file_get_contents('php://input'));
            if($datos != NULL) {
                if(experiencia::insert($datos->cargo, $datos->descripcion, $datos->nombre_empresa, $datos->persona_id)) {
                    http_response_code(200);
                }//end if
                else {
                    http_response_code(400);
                }//end else
            }//end if
            else {
                http_response_code(405);
            }//end else
            break;

        case 'PUT':
            $datos = json_decode(file_get_contents('php://input'));
            if($datos != NULL) {
                if(experiencia::update($datos->id, $datos->cargo, $datos->descripcion, $datos->nombre_empresa, $datos->persona_id)) {
                    http_response_code(200);
                }//end if
                else {
                    http_response_code(400);
                }//end else
            }//end if
            else {
                http_response_code(405);
            }//end else
            break;
        case 'DELETE':
            if(isset($_GET['id'])){
                if(experiencia::delete($_GET['id'])) {
                    http_response_code(200);
                }//end if
                else {
                    http_response_code(400);
                }//end else
            }//end if 
            else {
                http_response_code(405);
            }//end else
            break;
        
        default:
            http_response_code(405);
            break;
    }//end while
=======



<?php



$method = $_SERVER['REQUEST_METHOD'];
if($method == "OPTIONS") {
    die();
}



    require_once"modelo.php";

    switch($_SERVER['REQUEST_METHOD'])
    {
        case 'GET':
            if(isset($_GET['id']))
            {
               
                //echo array(Experiencia::getAll());
                echo json_encode(Experiencia::getWhere($_GET['id']));
                
                
            }   
            else
            {   
                echo json_encode(Experiencia::getAll(),JSON_NUMERIC_CHECK); 
            }
            break;

        case 'POST':
            $datos = json_decode(file_get_contents('php://input'));
            if($datos != NULL)
            {
                if(Experiencia::insert($datos->cargo,$datos->descripcion,$datos->nombre_empresa,$datos->persona_id))
                {
                    //http_response_code(200);
                }
                else
                {
                    //http_response_code(400);
                }
            }
            else
            {
                //http_response_code(405);
            }
            break;
        
        
            case 'PUT':
                $datos = json_decode(file_get_contents('php://input'));
                if($datos != NULL)
                {
                    if(Experiencia::update($datos->id,$datos->cargo,$datos->descripcion,$datos->nombre_empresa,$datos->persona_id))
                    {
                        //http_response_code(200);
                    }
                    else
                    {
                        //http_response_code(400);
                    }
                }
                else
                {
                    //http_response_code(405);
                }
                break;
        
        case 'DELETE':
            if(isset($_GET['id']))
            {
                if(Experiencia::delete($_GET['id']))
                {
                    //http_response_code(200);
                }
                else
                {
                    //http_response_code(400);
                }

            }
            else
            {
                //http_response_code(405);
            }
            break;

        default:
            break;

        
    }

?>
>>>>>>> refs/remotes/origin/main
