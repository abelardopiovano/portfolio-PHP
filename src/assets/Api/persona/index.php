


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
               
                //echo array(Persona::getAll());
                echo json_encode(Persona::getWhere($_GET['id']));
                
                
            }   
            else
            {   
                echo json_encode(Persona::getAll(),JSON_NUMERIC_CHECK); 
            }
            break;

        case 'POST':
            $datos = json_decode(file_get_contents('php://input'));
            if($datos != NULL)
            {
                if(Persona::insert($datos->nombre,$datos->descripcion,$datos->url_cv))
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
                if(Persona::update($datos->id,$datos->nombre,$datos->descripcion,$datos->url_cv))
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
                if(Persona::delete($_GET['id']))
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