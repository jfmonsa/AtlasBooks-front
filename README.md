# Get Started

## Configurar entorno local
### 1. Clone the repository

1. Ubicate en la carpeta donde quieres que el repositorio front resida
2. Abre la carpeta del repo, abre la terminal ahí y clona el repositorio
```
git clone git@github.com:jfmonsa/AtlasBooks-front.git
```

### 2. Install dependencies
+  Antes de ejecutar comandos `npm` debes tener instalado Node Js en tu equipo
1. Abre la terminal en repositorio y ejecuta el siguiente comando

```
npm install
```

### 3. To run a developer server
```
npm run dev
```

## Flujo de trabajo en Guithub, Guia para contribuir

### Idea global: 
Por cada feature en la que trabajemos vamos a crear un Pull Request, todo ello implica que por cada feature (pej. crear un componente, una funcionalidad, arreglar un bug etc.) vamos a crear una rama `branch` sobre la cual vamos a hacer los cambios `commits` y cuando los tengamos listos (Todos los commits sobre dicha funcionalidad), vamos hacer la pull request. Esta metodología se conoce como Github Flow (No confundir con Git Flow), la cual es de las más sencillas para trabajar de manera colaborativa.

> ***Nota importante***: Por nada del mundo debemos subir cambios directamente a la rama main


### Pasos para hacer una pull Request
> ***Nota***: Antes de contribuir, tener configurado el entorno (clonar e instalar las dependencias)

***1. Crear una rama***: En tu respositorio local vas a crear una rama sobre la cual vas a hacer todos los cambios correspondientes a la feature, la naming convention recomendada para nombrar estas ramas es (Elige según corresponda):

+ feature/nombre-rama
+ fix/nombre-rama
+ update/nombre-rama

Para crear la nueva rama y movernos para trabajar en ella, ejecuta (Recuerda que pones feature, fix o update segun hayas elegido antes en tu nombre):
```
git checkout -b feature/nombre-rama
```

***2. Haz tus cambios y haz commit de tus cambios***: Realiza los cambios que desees en los archivos del repositorio en tu máquina local.

Una vez que hayas realizado tus cambios, agrega los archivos modificados y haz un commit con un mensaje descriptivo, intenta que sea un commit por cada :

> Idealmente, cada commit debe contener cambios aislados entre si y completos. es decir si tenemos que hacer dos cosas distintas pero sobre la misma feature, por ejemplo: 1.arreglar un error ortografico (fix a typo) en un texto y 2. arreglar un bug en una función. hacemos dos commits uno para cada uno. Esto hace que los cambiso sea faciles de revertir en caso de quererlo 

Para hacer cada commit:
```
git add .
git commit -m "Descripción breve de tus cambios en el commit"
```

***3. Sube tu rama al repo en Github***
```
git push origin nombre-de-tu-rama
```

***4. Crea la Pull Request***: Ve a la página del repositorio en GitHub. Deberías ver un mensaje indicando que has hecho cambios recientes en tu rama y un botón para crear una nueva pull request. Haz clic en él, completa la descripción de tu pull request y sigue las instrucciones para crearla.

Una vez creada la pull request, todos los colaboradores del repositorio podrán revisar tus cambios, hacer comentarios y, si todo está bien, fusionar tus cambios en el repositorio principal.

***5. Eliminar rama (Ojo)***: Una vez se termine de trabajar por completo en una feature es conveniente eliminar esa rama ya que no la vamos a usar más (Esto se podría hacer al final del sprint para revisar todo antes de eliminarla)

> Es importante tener en cuenta que la eliminación de ramas debe hacerse con precaución, especialmente si otros miembros del equipo están trabajando en ellas o si contienen cambios que aún no se han fusionado. Siempre es recomendable comunicarse con el equipo y asegurarse de que la eliminación de una rama no afectará negativamente el trabajo en curso.

Eliminar la rama localmente
```
git branch -d nombre-de-tu-rama
```

Eliminar la rama del repo en Github
```
git push origin --delete nombre-de-tu-rama
```