


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