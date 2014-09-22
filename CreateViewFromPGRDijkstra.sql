CREATE VIEW test2 as

SELECT * FROM
ways join
(SELECT seq, id1 AS node, id2 AS edge, cost FROM pgr_dijkstra('
                SELECT gid AS id,
                         source::integer,
                         target::integer,
                         length::double precision AS cost
                        FROM ways,restrictions
                        where ways.gid=restrictions.gid 
                        and not ada=1',
                30, 60, false, false)) as route
                on ways.gid = route.edge;