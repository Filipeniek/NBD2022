import riak
riakClient = riak.RiakClient(pb_port=8087)
bucket = riakClient.bucket('s23911')

dane_pk = {"name": "Stefan", "surname": "Wichura", "age": 31, "isStudent":TRUE, "Height": 175}
key = bucket.new('person', data = dane_pk)
key.store()
print('Adding data')

retrieved = bucket.get('person')
print('Data:' + str(retrieved.data))


retrieved.data['isStudent'] = FALSE
retrieved.store()

retrieved_modified = bucket.get('person')
print('Editing isStudent field: ' + str(retrieved_modified.data))


retrieved_modified.delete()
print('Erasing data')
deleted = bucket.get('person')
print('Loading deleted key: ' + str(deleted.data))


