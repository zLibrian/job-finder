import { CustomText } from '../../typography/CustomText';
import { Button } from '../Button';
import { Container, FindJobsContainer } from './styles';

export function FindJobs() {
  return (
    <Container>
      <FindJobsContainer>
        <CustomText fontSize="32px">Find Jobs</CustomText>
        <Button title="Saved Jobs" />
      </FindJobsContainer>
    </Container>
  );
}