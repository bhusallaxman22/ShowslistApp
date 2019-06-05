 // <View style={styles.card}>
     {/*
      <FlipComponent
        isFlipped={this.state.isFlipped}
        frontView={
          <View>
            <Text style={{ textAlign: 'center' }}>
    <Image
    style={{width: 20, height: 20}} 
    // source = {require(`./images/${this.props.id}.jpg`)} 
    alt='shows' />
    <Text >{this.props.id}.{this.props.name}{"\n"}</Text>
    <Text>No. Of Current Seasons: {this.props.No_Of_Current_Seasons}{"\n"}</Text>
    <Text>Runtime Status: {this.props.Status}{"\n"}</Text>
            </Text>
          </View>
        }
        backView={
          <ScrollView>
          <View>
            <View style={{ textAlign: 'center' }}>
            <Text className="red">Plot:{"\n"}</Text><Text className='bg-gray near-black br3'> {this.props.Plot}{"\n"}</Text>
     <Text className="navy">IMDB: {this.props.imdb}{"\n"}</Text> 
    <Button 
    onPress={this._handlePressSite}
     title='Link' />
            </View>
          </View>
          </ScrollView>
        }
      /> */}
        {/* <Button
        onPress={() => {
          this.setState({ isFlipped: !this.state.isFlipped })
        }}
        title="Info"
      /> */}


















         {/* <CardFlip style={styles.cardContainer} ref={(card) => this.card = card} ><ScrollView>
    <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><View>
            <Text style={{ textAlign: 'center' }}>
    <Image
    style={{width: 20, height: 20}} 
    // source = {require(`./images/${this.props.id}.jpg`)} 
    alt='shows' />
    <Text >{this.props.id}.{this.props.name}{"\n"}</Text>
    <Text>No. Of Current Seasons: {this.props.No_Of_Current_Seasons}{"\n"}</Text>
    <Text>Runtime Status: {this.props.Status}{"\n"}</Text>
    </Text>
    </View></TouchableOpacity></ScrollView>
    <TouchableOpacity style={styles.card} onPress={() => this.card.flip()} ><ScrollView>
          <View>
            <View style={{ textAlign: 'center' }}>
            <Text>Plot:{"\n"}</Text><Text> {this.props.Plot}{"\n"}</Text>
     <Text>IMDB: {this.props.imdb}{"\n"}</Text>
    <Text 
    onPress={this._handlePressSite}
     >Link</Text>
            </View>
          </View>
          </ScrollView></TouchableOpacity>
  </CardFlip>  
        <Button
        onPress={() => {
          this.setState({ isFlipped: !this.state.isFlipped })
        }}
        title="Info"
      />  */}
      `${this.props.link}`