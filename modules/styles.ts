import { StyleSheet } from 'react-native';

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#87ceeb',
  },
  topContainer: {
    alignItems: 'center',
    backgroundColor: '#87ceeb',
    flex: 1,
  },
  title: {
    marginTop: 55,
    fontSize: 25,
    color: 'black',
    fontWeight: '500',
  },
  todoList: {
    marginTop: 20,
    borderRadius: 15,
    flex: 1,
    width: '90%',
    paddingHorizontal: 15,
    backgroundColor: 'white',
  },
  plusImage: {
    height: 40,
    justifyContent: 'center',
    backgroundColor: '#87ceeb',
    borderRadius: 12,
    marginTop: 10,
  },
  buttonText: {
    fontSize: 16,
    textAlign: 'center',
    color: 'white',
    fontWeight: '500',
  },
  deleteImage: {
    width: 30,
    height: 30,
    marginRight: 15,
  },
  alignRight: {
    marginLeft: 'auto',
    flexDirection: 'row',
  },
  input: {
    height: 50,
    flex: 1,
    fontSize: 16,
    color: '#000000',
    fontWeight: '400',
  },
  card: {
    flex: 1,
    marginHorizontal: 12,
    paddingVertical: 12,
    justifyContent: 'center',
  },
  colorBadge: {
    height: 30,
    width: 30,
    borderRadius: 15,
    marginRight: 15,
  },
  todoName: {
    fontSize: 18,
    fontWeight: '300',
    marginVertical: 5,
    color: 'black',
  },
  cardTodo: {
    flex: 1,
    marginHorizontal: 12,
    paddingVertical: 15,
    borderBottomColor: 'grey',
    borderBottomWidth: 0.5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  noTodoStyle: { marginTop: 5, textAlign: 'center', color: '#838383' },
  todoStyle: { color: 'white', fontSize: 20, fontWeight: 'bold' },
  descStyle: {
    fontSize: 15,
    marginVertical: 5,
    color: '#838383',
  },
});