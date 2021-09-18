import numpy as np
import ee
import datetime

ee.Authenticate()
ee.Initialize()

#Constants
zoom_level = 15

def create_geometry(array_of_coordinates):
    #Apparently this is an invalid JSON format
    geometry = ee.Geometry({
        'type': 'Polygon',
        'coordinates': array_of_coordinates
    })

    return geometry

#Getting center of polygon to center map
#Can use geoemtry.centroid - Going to test it out before remove 
def get_center_coordinate(array_of_coordinates):
    size = (float)(len(array_of_coordinates))

    lon, lat = 0.0, 0.0

    for coord in array_of_coordinates:
        #TODO: Assuming first element is longitude and second element is latitude
        lon += coord[0]
        lat += coord[1]

    return [lon/size, lat/size]



def get_glacier_data(array_of_coordinates):

    #Getting Geometry
    geometry = create_geometry(array_of_coordinates)

    #Center of Glacier
    center_lon, center_lat = get_center_coordinate(array_of_coordinates)

    Map.setCenter(center_lon, center_lat, zoom_level)

    #Not sure about this, this is supposed to show the geometry on the map
    Map.addLayer(geometry,
             {'color': 'black'},
             'Geometry [black]: polygon');


