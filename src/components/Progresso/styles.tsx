import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
  barContainer: {
    width: '100%',
    height: '20%',
    borderRadius: 15,
    borderColor: 'gray',
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', 
    backgroundColor: '#FFFFFF',
    padding:'5%',
  },
  caixaBar: {
    flexDirection: 'row',
    width: '90%', 
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom:'5%',
  },
  text: {
    fontSize: 22,
    padding: 25,
    color: '#7600B5',
  },
  progressBarContainer: {
    height: '50%',
    borderRadius: 15,
    marginRight: 10,
    flex: 1, 
    flexDirection: 'row', 
    
  },
  progressBarGray: { 
    borderRadius: 15,
    position: 'absolute', 
    left: 0,
    top: 0,
    bottom: 0,
  },
  progressBar: {
    backgroundColor: '#57E447', 
    borderRadius: 15,
  },
  progressText: {
    fontSize: 16,
  }
});

